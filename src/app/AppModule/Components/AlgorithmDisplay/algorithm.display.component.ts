import { Component, Input, OnInit } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';
import { Cluster } from '../../Models/Cluster';
import { DataSetItem } from '../../Models/DataSetItem';
import { DimensionReductionService } from '../../Services/DimensionReductionService';
import ColorGenerator from '../../Services/ColorGenerator';
import PositionGenerator from '../../Services/PositionGenerator';

@Component({
    selector: 'algorithm-display',
    templateUrl: './algorithm.display.component.html',
    styleUrls: ['./algorithm.display.component.scss'],
})
export class AlgorithmDisplayComponent implements OnInit
{
    @Input() algorithm: Algorithm;

    public width: number = 700;
    public height: number = 400;
    public scale: number = 2;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private configuration: any;
    private colours: any;

    constructor(private reductionService: DimensionReductionService, private colorGenerator: ColorGenerator, private positionGenerator: PositionGenerator)
    {
        this.configuration = {
            centroidsScale: 1,
            clusterItemsScale: 1,
            clusterItemsVerticalScale: 0,
            clusterItemsHorizontalScale: 0
        };
        this.colours = {};
    }

    public draw(): void
    {
        this.clear();

        for (let i = 0; i < this.algorithm.getClusters().length; i++) {
            this.drawCluster(this.algorithm.getClusters()[i]);
        }
    }

    public clear(): void
    {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    protected drawCluster(cluster: Cluster): void
    {
        if (!this.colours[cluster.id]) {
            this.colours[cluster.id] = this.colorGenerator.generate()[0];
        }

        for (let i = 0; i < cluster.getItems().length; i++) {
            this.drawItem(cluster ,cluster.getItems()[i], i);
        }

        this.drawCentroid(cluster);
    }

    protected drawItem(cluster: Cluster, item: DataSetItem, itemIndex: number): void
    {
        this.context.fillStyle = this.colours[cluster.id];
        let coordinates        = this.getItemCoordinates(item, cluster, itemIndex);

        this.context.beginPath();
        this.context.arc(coordinates.x, coordinates.y, 5, 0, 2 * Math.PI);
        this.context.fill();
    }

    protected drawCentroid(cluster: Cluster) {
        this.context.fillStyle = this.colours[cluster.id];
        let coordinates = this.getClusterCoordinates(cluster.centroid, cluster.id);

        coordinates.x = coordinates.x - 50 > 0 ? coordinates.x - 50 : coordinates.x;
        coordinates.y = coordinates.y - 50 > 0 ? coordinates.y - 50 : coordinates.y;

        this.context.fillRect(coordinates.x, coordinates.y, 15, 15);

        this.context.fillStyle = '#000000';
        this.context.lineWidth = 2.5;
        this.context.strokeRect(coordinates.x, coordinates.y, 15, 15);
    }

    protected getClusterCoordinates(item: DataSetItem, index: number): { x: number, y: number }
    {
        let reduced = this.reductionService.reduceNumbers(item.getValues(), 2);

        return this.positionGenerator.generatePositionFromBound(
            reduced[0], reduced[1],
            this.width, this.height,
            index, this.configuration.centroidsScale
        )
    }

    protected getItemCoordinates(item: DataSetItem, cluster: Cluster, index: number): { x: number, y: number }
    {
        let reduced = this.reductionService.reduceNumbers(item.getValues(), 2);

        let centroidCoordinates = this.getClusterCoordinates(cluster.centroid, cluster.id);
        let coordinates = this.positionGenerator.generatePositionFromBound(
            reduced[0] * this.configuration.clusterItemsScale, reduced[1] * this.configuration.clusterItemsScale,
            this.width, this.height,
            index, 1
        );

        coordinates = this.positionGenerator.generateQuauterPosition(coordinates, index, this.configuration.clusterItemsHorizontalScale, this.configuration.clusterItemsVerticalScale);

        return {
            x: centroidCoordinates.x + coordinates.x % 100,
            y: centroidCoordinates.y + coordinates.y % 100
        };
    }

    public setConfiguration(configuration: object): void
    {
        this.configuration = configuration;
    }

    public resetColours(): void
    {
        this.colours = {};
    }

    ngOnInit(): void
    {
        this.canvas  = <HTMLCanvasElement> document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
}
