import { Component, Input, OnInit } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';
import { Cluster } from '../../Models/Cluster';
import { DataSetItem } from '../../Models/DataSetItem';

@Component({
    selector: 'algorithm-display',
    templateUrl: './algorithm.display.component.html',
    styleUrls: ['./algorithm.display.component.scss'],
})
export class AlgorithmDisplayComponent implements OnInit
{
    @Input() algorithm: Algorithm;

    public width: number = 500;
    public height: number = 500;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public draw(): void
    {
        this.algorithm.getClusters().forEach(cluster => {
            this.drawCluster(cluster);
        });
    }

    protected drawCluster(cluster: Cluster): void
    {
        this.drawCentroid(cluster);

        cluster.getItems().forEach(dataItem => this.drawItem(cluster, dataItem));
    }

    protected drawCentroid(cluster: Cluster): void
    {
        this.context.fillStyle = '#ff0000';

        this.drawItem(cluster, cluster.getCentroid());
    }

    protected drawItem(cluster: Cluster, item: DataSetItem): void
    {
        this.context.beginPath();

        this.context.closePath();
    }

    ngOnInit(): void
    {
        this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
}
