import { MutableRefObject, useRef, useEffect } from "react";

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
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

    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(2), 0, 2*Math.PI);
        ctx.fill();
    };

    useEffect(() => {
        let animationFrameId;

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
    }, [draw]);

    return (
        <canvas ref={canvasRef} id="canvas"></canvas>
    );
}