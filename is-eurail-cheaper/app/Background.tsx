import {MutableRefObject, useRef, useEffect, ReactElement, memo} from "react";
import {renderToStaticMarkup} from "react-dom/server";
// import {Children} from "react";
// import plane from "./airplane.png";

const TO_RADIANS = Math.PI/180;
const IMG_SIZE = 50;
const SPEED = 2;
const WOBBLE = 10;
const MAX_TRAIL = 500;
const COLLISIONS = false;

// not a canvas master so I used these sources:
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle

// images
// plane => <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Darius Dan - Flaticon</a>
// train => <a href="https://www.flaticon.com/free-icons/train" title="train icons">Train icons created by Freepik - Flaticon</a>
// bus => <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">Bus icons created by Freepik - Flaticon</a>
// boat => <a href="https://www.flaticon.com/free-icons/boat" title="boat icons">Boat icons created by smalllikeart - Flaticon</a>
// tram => <a href="https://www.flaticon.com/free-icons/tram" title="tram icons">Tram icons created by Freepik - Flaticon</a>
const Background = memo(function Background({children: images, ending}: {children: ReactElement[], ending: boolean}) {
    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null)

    let imgObjs = images.map((img) => {
        let i = new Image();
        i.src = img.props.src.src;
        return i;
    });

    let tilt = Math.floor(Math.random() * 90);
    let speeds = [3, 3, 3, 3, 3];
    let max_trails = useRef(images.map(_ => MAX_TRAIL));
    let imagePositions = useRef(images.map(_ => [200, 200]));
    let imageAngles = useRef(images.map((_, idx) => idx * (360 / images.length) + tilt));
    // let lines = images.map(_ => []);
    let lines: MutableRefObject<number[][][][]> = useRef(images.map(_ => []));
    let currentLines = useRef([...imagePositions.current]);
    let canCollide = useRef(images.map(_ => 0));
    // let

    let dist = function(p1: number[], p2: number[]) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }

    function rotateAndPaintImage ( ctx: CanvasRenderingContext2D, image: HTMLImageElement, angleInRad: number ,
                                   positionX: number, positionY: number, axisX: number, axisY: number ) {
        ctx.save();
        ctx.translate( positionX, positionY );
        ctx.rotate( angleInRad );
        ctx.drawImage( image, -axisX, -axisY, IMG_SIZE, IMG_SIZE );
        ctx.restore();
    }

    function renderTrail(ctx: CanvasRenderingContext2D, idx: number) {
        let [x, y] = currentLines.current[idx];
        let [x2, y2] = imagePositions.current[idx];
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        lines.current[idx].map((line) => {
            let [x, y] = line[0];
            let [x2, y2] = line[1];
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        });
    }

    function cutLine(line: number[][], length: number) {
        // cut line to length from second element
        let [p1, p2] = line;
        if (length < 0) {
            return [p2, p2];
        }

        let [x1, y1] = p1;
        let [x2, y2] = p2;
        let m = (y2 - y1) / (x2 - x1);

        let xmul = 1;
        let ymul = 1;
        if (m < 0) {
            if (x2 < x1) {
                xmul = -1;
            } else if (y2 < y1) {
                ymul = -1;
            }
        } else if (m > 0) {
            if (x2 < x1) {
                xmul = -1;
                ymul = -1;
            }
        }

        let xp = x2 - xmul * (length / Math.sqrt(1 + Math.pow(m, 2)));
        let yp = y2 - ymul * (length / Math.sqrt(1 + Math.pow(m, -2)));
        return [[xp, yp], p2];
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        let ratio = 1;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        let collide = images.map((_, idx) => {
            if (!COLLISIONS) {
                return false;
            }
            if (canCollide.current[idx] > 0){
                canCollide.current[idx] -= 1;
                return false;
            }

            let collides = false;
            let p1 = imagePositions.current[idx];
            images.map((_, idx2) => {
                if (idx === idx2) {
                    return;
                }

                let p2 = imagePositions.current[idx2];
                if (dist(p1, p2) < IMG_SIZE) {
                    collides = true;
                }
            });
            return collides;
        });

        imgObjs.map((img, idx) => {
            let dists = lines.current[idx].map((line) => dist(line[0], line[1]))
            let total_distance = dists.reduce((a, b) => a + b, 0);
            let currentLine = [currentLines.current[idx], imagePositions.current[idx]];
            let dcl = dist(currentLine[0], currentLine[1]);
            total_distance += dcl;
            let i = 0;
            while (total_distance > max_trails.current[idx]) {
                if (lines.current[idx].length === 0) {
                    let newLine = cutLine(currentLine, dcl - Math.max(0, (total_distance - max_trails.current[idx])));
                    currentLines.current[idx] = newLine[0];
                    break;
                } else {
                    if (dists[i] < (total_distance - max_trails.current[idx])) {
                        lines.current[idx].shift();
                        total_distance -= dists[i];
                    } else {
                        lines.current[idx][0] = cutLine(lines.current[idx][0], dists[i] - (total_distance - max_trails.current[idx]));
                        break;
                    }
                }
                i += 1;
            }

            renderTrail(ctx, idx);

            let [x, y] = imagePositions.current[idx];
            let angle = imageAngles.current[idx];
            rotateAndPaintImage(ctx, img, angle * TO_RADIANS, x, y, IMG_SIZE / 2, IMG_SIZE / 2);

            x += Math.cos(angle * TO_RADIANS) * speeds[idx];
            y += Math.sin(angle * TO_RADIANS) * speeds[idx];
            imagePositions.current[idx] = [x, y];

            if (ending) {
                max_trails.current[idx] -= speeds[idx];
                return;
            }

            let bounce = false;
            if (x <= IMG_SIZE / 2 || x >= ctx.canvas.width - (IMG_SIZE / 2)) {
                bounce = true;
                if (angle > 180) {
                    imageAngles.current[idx] = 540 - angle
                } else {
                    imageAngles.current[idx] = 180 - angle;
                }

                if (x < IMG_SIZE) {
                    imagePositions.current[idx][0] = IMG_SIZE / 2;
                } else {
                    imagePositions.current[idx][0] = ctx.canvas.width - (IMG_SIZE / 2);
                }
            } else if (y < IMG_SIZE / 2 || y >= ctx.canvas.height - (IMG_SIZE / 2)) {
                bounce = true;
                imageAngles.current[idx] = 360 - angle;

                if (y < IMG_SIZE) {
                    imagePositions.current[idx][1] = IMG_SIZE / 2;
                } else {
                    imagePositions.current[idx][1] = ctx.canvas.height - (IMG_SIZE / 2);
                }
            }

            if (collide[idx]) {
                canCollide.current[idx] = 50;
                imageAngles.current[idx] = Math.floor(Math.random() * 360);
            }

            if (bounce || collide[idx]) {
                lines.current[idx].push([currentLines.current[idx], [x, y]]);
                currentLines.current[idx] = [x, y];
                imageAngles.current[idx] += Math.floor(Math.random() * WOBBLE) - WOBBLE / 2;
                imageAngles.current[idx] %= 360; // clamp to 360
            }
        });
    };

    useEffect(() => {
        let animationFrameId: number;

        const canvas = canvasRef.current;
        if (canvas === null) {
            return
        }

        const context = canvas.getContext('2d');
        if (context === null) {
            return;
        }

        const render = () => {
            draw(context);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        };
    }, [ending]);

    return (
        <canvas ref={canvasRef} id="canvas" width="450px" height="700px" />
    );
});

export default Background;