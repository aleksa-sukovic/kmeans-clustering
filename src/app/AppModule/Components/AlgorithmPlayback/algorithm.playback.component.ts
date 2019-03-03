import { Component, Input } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';

@Component({
    selector: 'algorithm-playback',
    templateUrl: './algorithm.playback.component.html',
    styleUrls: ['./algorithm.playback.component.scss'],
})
export class AlgorithmPlaybackComponent
{
    @Input() algorithm: Algorithm;

    protected nextIteration()
    {
        this.algorithm.nextIteration();

        console.log(this.algorithm.getClusters());
    }
}
