import { Component, Input, OnInit } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';
import { Cluster } from '../../Models/Cluster';
import { DataSetItem } from '../../Models/DataSetItem';
import { DimensionReductionService } from '../../Services/DimensionReductionService';

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
    private configuration: object;

    constructor(private reductionService: DimensionReductionService)
    {
        this.configuration = {
            scale: 1
        };
    }

    public draw(): void
    {
        this.clear();

        this.algorithm.getClusters().forEach(cluster => {
            this.drawCluster(cluster);
        });
    }

    public clear(): void
    {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    protected drawCluster(cluster: Cluster): void
    {
        this.drawCentroid(cluster);

        // cluster.getItems().forEach(dataItem => this.drawItem(cluster, dataItem));
    }

    protected drawCentroid(cluster: Cluster): void
    {
        this.context.fillStyle = '#ff0000';

        this.drawItem(cluster, cluster.getCentroid());
    }

    protected drawItem(cluster: Cluster, item: DataSetItem): void
    {
        this.context.fillStyle = this.getClusterColor(cluster);
        let coordinates        = this.getItemCoordinates(cluster, item);

        this.context.fillRect(coordinates.x, coordinates.y, 5, 5);
    }

    protected getClusterColor(cluster: Cluster): string
    {
        switch(cluster.getId() % 4) {
            case 0: return '#4286f4';
            case 1: return '#ff56ff';
            case 2: return '#ff3a3a';
            case 3: return '#ffc339';
            default: '';
        }
    }

    protected getItemCoordinates(cluster: Cluster, item: DataSetItem): { x: number, y: number }
    {
        let reduced = this.reductionService.reduceNumbers(item.getValues(), 2);

        switch(cluster.getId() % 4) {
            case 0: return {
                x: Math.abs((this.width / 2 - reduced[0]) % (this.width / 2)),
                y: Math.abs((this.height / 2 - reduced[1]) % (this.height / 2))
            };
            case 1: return {
                x: this.width - Math.abs((this.width / 2 - reduced[0]) % (this.width / 2)),
                y: Math.abs((this.height / 2 - reduced[1]) % (this.height / 2))
            };
            case 2: return {
                x: Math.abs((this.width / 2 - reduced[0]) % (this.width / 2)),
                y: this.height - Math.abs((this.height / 2 - reduced[1]) % (this.height / 2))
            }
            case 3: return {
                x: this.width - Math.abs((this.width / 2 - reduced[0]) % (this.width / 2)),
                y: this.height - Math.abs((this.height / 2 - reduced[1]) % (this.height / 2))
            }
            default: return {
                x: Math.abs((this.width / 2 - reduced[0]) % (this.width / 2)),
                y: Math.abs((this.height / 2 - reduced[1]) % (this.height / 2))
            }
        };
    }

    public setConfiguration(configuration: object): void
    {
        this.configuration = configuration;
    }

    ngOnInit(): void
    {
        this.canvas  = <HTMLCanvasElement> document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
}
