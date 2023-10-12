import { MutableRefObject, useRef, useEffect } from "react";

const TO_RADIANS = Math.PI/180;

// not a canvas master so I used these sources:
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle

// images
// plane => <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Darius Dan - Flaticon</a>
// train => <a href="https://www.flaticon.com/free-icons/train" title="train icons">Train icons created by Freepik - Flaticon</a>
// bus => <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">Bus icons created by Freepik - Flaticon</a>
export default function Background({ending}: {ending: boolean}) {
    const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef(null)

    let lines = [];

    let startPoints = [];

    let images = [];

    function rotateAndPaintImage ( ctx, image, angleInRad , positionX, positionY, axisX, axisY ) {
        ctx.save();
        ctx.translate( positionX, positionY );
        ctx.rotate( angleInRad );
        ctx.drawImage( image, -axisX, -axisY );
        ctx.restore();
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    };

    useEffect(() => {
        let animationFrameId: number;

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        // context.font='14px FontAwesome';
        // context.fillText('\uf0c8', 40, 40);

        //Our draw came here
        const render = () => {
            draw(context);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        };
    }, []);

    return (
        <canvas ref={canvasRef} id="canvas"></canvas>
    );
}