export default class ItemVisualizer
{
    public static drawItem(canvas: HTMLCanvasElement, coordinates: { x: number, y: number }, color: string): void
    {
        const context = canvas.getContext('2d');

        context.fillStyle = color;
        context.beginPath();

        context.arc(
            coordinates.x, coordinates.y,
            5, 0, 2 * Math.PI
        );

        context.fill();
    }

    public static drawCentroid(canvas: HTMLCanvasElement, coordinates: { x: number, y: number }, color: string): void
    {
        const context = canvas.getContext('2d');

        context.fillStyle = color;
        context.beginPath();
        context.arc(
            coordinates.x, coordinates.y,
            7, 0, 2 * Math.PI
        );
        context.fill();


        context.strokeStyle = '#000000';
        context.beginPath();
        context.arc(
            coordinates.x, coordinates.y,
            5, 0, 2 * Math.PI
        );
        context.stroke();
    }
}
