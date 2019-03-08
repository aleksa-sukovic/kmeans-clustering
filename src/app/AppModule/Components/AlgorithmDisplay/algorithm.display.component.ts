import { Component, Input, OnInit } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';
import { Cluster } from '../../Models/Cluster';
import { DataSetItem } from '../../Models/DataSetItem';
import { DimensionReductionService } from '../../Services/DimensionReductionService';
import ColorGenerator from '../../Services/ColorGenerator';
import PositionGenerator from '../../Services/PositionGenerator';
import HudDisplay from './hud.display';
import ItemVisualizer from './item.visualizer';

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
    public configuration: any;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private colours: any;

    constructor(private reductionService: DimensionReductionService, private colorGenerator: ColorGenerator, private positionGenerator: PositionGenerator)
    {
        this.configuration = {
            xScale: 30,
            yScale: 60,
            xOffset: 0,
            yOffset: 0
        };
        this.colours = {};
    }

    public draw(): void
    {
        this.clear();
        this.drawItems();
        this.drawClusters();
    }

    protected drawItems(): void
    {
        for (let i = 0; i < this.algorithm.getClusters().length; i++) {
            let cluster = this.algorithm.getClusters()[i];

            if (!this.colours[cluster.id]) {
                this.colours[cluster.id] = this.colorGenerator.generate(1);
            }

            cluster.getItems().forEach(dataItem => {
                ItemVisualizer.drawItem(this.canvas, this.getCoordinates(dataItem), this.colours[cluster.id]);
            });
        }
    }

    protected drawClusters(): void
    {
        for (let i = 0; i < this.algorithm.getClusters().length; i++) {
            let cluster = this.algorithm.getClusters()[i];

            ItemVisualizer.drawCentroid(this.canvas, this.getCoordinates(cluster.centroid), this.colours[cluster.id]);
        }
    }

    protected onMouseMove(event: MouseEvent)
    {
        this.clear();
        this.draw();

        this.algorithm.getClusters().forEach(cluster => {
            let coordinates = this.getCoordinates(cluster.centroid);

            HudDisplay.showForCluster(this.canvas, event, cluster, coordinates);

            cluster.getItems().forEach(item => {
                coordinates = this.getCoordinates(item);

                HudDisplay.showForItem(this.canvas, event, item, coordinates);
            });
        });
    }

    protected getCoordinates(item: DataSetItem): { x: number, y: number }
    {
        let coordinates = this.reductionService.reduceNumbers(item.getValues());

        return {
            x: coordinates[0] * this.configuration.xScale + this.configuration.xOffset % this.width,
            y: coordinates[1] * this.configuration.yScale + this.configuration.yOffset % this.height
        };
    }

    public clear(): void
    {
        this.context.clearRect(0, 0, this.width, this.height);
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
