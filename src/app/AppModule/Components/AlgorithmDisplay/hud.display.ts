import { DataSetItem } from '../../Models/DataSetItem';
import { Cluster } from '../../Models/Cluster';

export default class HudDisplay
{
    public static showForCluster(canvas: HTMLCanvasElement, event: MouseEvent, cluster: Cluster, coordinates: { x: number, y: number }): boolean
    {
        if (!this.shouldShowHud(canvas, event, coordinates, 20)) {
            return false;
        }

        this.showBackground(canvas, coordinates.x, coordinates.y);
        this.showClusterDetails(cluster, canvas, coordinates.x, coordinates.y);

        return true;
    }

    public static showForItem(canvas: HTMLCanvasElement, event: MouseEvent, item: DataSetItem, coordinates: { x: number, y: number }): boolean
    {
        if (!this.shouldShowHud(canvas, event, coordinates, 5)) {
            return false;
        }

        this.showBackground(canvas, coordinates.x, coordinates.y);
        this.showItemDetails(item, canvas, coordinates.x, coordinates.y);

        return true;
    }

    private static shouldShowHud(canvas: HTMLCanvasElement, event: MouseEvent, coordinates: {x: number, y: number}, threshold: number)
    {
        const canvasCoordinates = {
            x: event.clientX - canvas.getBoundingClientRect().left,
            y: event.clientY - canvas.getBoundingClientRect().top,
        };

        let conditionX = canvasCoordinates.x >= coordinates.x && canvasCoordinates.x <= coordinates.x + threshold
        let conditionY = canvasCoordinates.y >= coordinates.y && canvasCoordinates.y <= coordinates.y + threshold;

        return conditionX && conditionY;
    }

    private static showBackground(canvas: HTMLCanvasElement, x: number, y: number): void
    {
        const context = canvas.getContext('2d');

        context.fillStyle = '#dbdbdb';
        context.strokeStyle = '#a8a8a8';
        context.lineWidth = 1.5;

        context.fillRect(x - 70, y - 30, 70, 30);
        context.strokeRect(x- 70, y - 30, 70, 30);
    }

    private static showItemDetails(item: DataSetItem, canvas: HTMLCanvasElement, x: number, y: number): void
    {
        const context = canvas.getContext('2d');
        const distanceTextDimension = context.measureText('Distance');
        const numberTextDimension = context.measureText(item.distanceFromCluster(item.cluster).toFixed(2));

        context.fillStyle = '#000000';
        context.font = '10px Arial';

        context.fillText('Distance', x - 70 + (70 - distanceTextDimension.width) / 2, y - 18);
        context.fillText(item.distanceFromCluster(item.cluster).toFixed(2), x - 70 + (70 - numberTextDimension.width) / 2, y - 6);
    }

    private static showClusterDetails(cluster: Cluster, canvas: HTMLCanvasElement, x: number, y: number): void
    {
        const context = canvas.getContext('2d');
        const nameDimension = context.measureText(cluster.name);

        context.fillStyle = '#000000';
        context.font = 'bold 12px Arial';

        context.fillText(cluster.name, x - 70 + (70 - nameDimension.width) / 2, y - 11);
    }
}
