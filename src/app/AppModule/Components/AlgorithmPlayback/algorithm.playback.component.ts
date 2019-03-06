import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';

@Component({
    selector: 'algorithm-playback',
    templateUrl: './algorithm.playback.component.html',
    styleUrls: ['./algorithm.playback.component.scss'],
})
export class AlgorithmPlaybackComponent
{
    @Input() algorithm: Algorithm;
    @Output() onNextIteration = new EventEmitter();

    protected nextIteration()
    {
        this.algorithm.nextIteration();

        this.onNextIteration.emit();

        console.log(this.algorithm.getClusters());
    }
}
