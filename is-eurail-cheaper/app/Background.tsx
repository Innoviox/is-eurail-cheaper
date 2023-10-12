import {MutableRefObject, useRef, useEffect, ReactElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
// import {Children} from "react";
// import plane from "./airplane.png";

const TO_RADIANS = Math.PI/180;
const IMG_SIZE = 50;
const SPEED = 2;
const WOBBLE = 10;
const MAX_TRAIL = 500;

// not a canvas master so I used these sources:
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle

// images
// plane => <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Darius Dan - Flaticon</a>
// train => <a href="https://www.flaticon.com/free-icons/train" title="train icons">Train icons created by Freepik - Flaticon</a>
// bus => <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">Bus icons created by Freepik - Flaticon</a>
// boat => <a href="https://www.flaticon.com/free-icons/boat" title="boat icons">Boat icons created by smalllikeart - Flaticon</a>
// tram => <a href="https://www.flaticon.com/free-icons/tram" title="tram icons">Tram icons created by Freepik - Flaticon</a>
export default function Background({children: images, ending}: {children: ReactElement[], ending: boolean}) {
    const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef(null)

    let imgObjs = images.map((img) => {
        let i = new Image();
        i.src = img.props.src.src;
        return i;
    });

    let tilt = Math.floor(Math.random() * 90);
    let imagePositions = images.map(_ => [200, 200]);
    let imageAngles = images.map((_, idx) => idx * (360 / images.length) + tilt);
    // let lines = images.map(_ => []);
    let lines = [];
    let currentLines = [...imagePositions];
    // let

    let dist = function(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }

    function rotateAndPaintImage ( ctx, image, angleInRad , positionX, positionY, axisX, axisY ) {
        ctx.save();
        ctx.translate( positionX, positionY );
        ctx.rotate( angleInRad );
        ctx.drawImage( image, -axisX, -axisY, IMG_SIZE, IMG_SIZE );
        ctx.restore();
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        let collide = images.map((_, idx) => {
            let collides = false;
            let p1 = imagePositions[idx];
            images.map((_, idx2) => {
                if (idx === idx2) {
                    return;
                }

                let p2 = imagePositions[idx2];
                if (dist(p1, p2) < IMG_SIZE) {
                    collides = true;
                }
            });
            return collides;
        });

        // draw lines
        currentLines.map((pos, idx) => {
            let [x, y] = pos;
            let [x2, y2] = imagePositions[idx];
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        });

        lines.map((line) => {
            let [x, y] = line[0];
            let [x2, y2] = line[1];
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        });

        imgObjs.map((img, idx) => {
            let [x, y] = imagePositions[idx];
            let angle = imageAngles[idx];
            rotateAndPaintImage(ctx, img, angle * TO_RADIANS, x, y, IMG_SIZE / 2, IMG_SIZE / 2);

            x += Math.cos(angle * TO_RADIANS) * SPEED;
            y += Math.sin(angle * TO_RADIANS) * SPEED;
            imagePositions[idx] = [x, y];

            let bounce = false;
            if (x <= IMG_SIZE / 2 || x >= ctx.canvas.width - (IMG_SIZE / 2)) {
                bounce = true;
                if (angle > 180) {
                    imageAngles[idx] = 540 - angle
                } else {
                    imageAngles[idx] = 180 - angle;
                }

                if (x < IMG_SIZE) {
                    imagePositions[idx][0] = IMG_SIZE / 2;
                } else {
                    imagePositions[idx][0] = ctx.canvas.width - (IMG_SIZE / 2);
                }
            } else if (y < IMG_SIZE / 2 || y >= ctx.canvas.height - (IMG_SIZE / 2)) {
                bounce = true;
                imageAngles[idx] = 360 - angle;

                if (y < IMG_SIZE) {
                    imagePositions[idx][1] = IMG_SIZE / 2;
                } else {
                    imagePositions[idx][1] = ctx.canvas.height - (IMG_SIZE / 2);
                }
            }

            // if (collide[idx]) {
            //     imageAngles[idx] = Math.floor(Math.random() * 360);
            // }

            if (bounce) {// || collide[idx]) {
                lines.push([currentLines[idx], [x, y]]);
                currentLines[idx] = [x, y];
                imageAngles[idx] += Math.floor(Math.random() * WOBBLE) - WOBBLE / 2;
                imageAngles[idx] %= 360; // clamp to 360
            }
        });
    };

    useEffect(() => {
        let animationFrameId: number;

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')


        //Our draw came here
        const render = () => {
            console.log("rendering");
            draw(context);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();
        // setTimeout()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        };
    }, []);

    return (
        <canvas ref={canvasRef} id="canvasa" width="400px" height="400px"></canvas>
    );
}