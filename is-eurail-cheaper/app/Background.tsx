import {MutableRefObject, useRef, useEffect, ReactElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
// import {Children} from "react";
// import plane from "./airplane.png";

const TO_RADIANS = Math.PI/180;
const IMG_SIZE = 50;

// not a canvas master so I used these sources:
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle

// images
// plane => <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Darius Dan - Flaticon</a>
// train => <a href="https://www.flaticon.com/free-icons/train" title="train icons">Train icons created by Freepik - Flaticon</a>
// bus => <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">Bus icons created by Freepik - Flaticon</a>
export default function Background({children: images, ending}: {children: ReactElement[], ending: boolean}) {
    const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef(null)

    let lines = [];

    let startPoints = [];

    let imgObjs = images.map((img) => {
        let i = new Image();
        i.src = img.props.src.src;
        return i;
    });


    function rotateAndPaintImage ( ctx, image, angleInRad , positionX, positionY, axisX, axisY ) {
        ctx.save();
        ctx.translate( positionX, positionY );
        ctx.rotate( angleInRad );
        ctx.drawImage( image, -axisX, -axisY, IMG_SIZE, IMG_SIZE );
        ctx.restore();
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        rotateAndPaintImage(ctx, imgObjs[0], 45 * TO_RADIANS, 500, 500, 100, 100);
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
        <canvas ref={canvasRef} id="canvasa" width="1000px" height="800px"></canvas>
    );
}