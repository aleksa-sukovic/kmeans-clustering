import { Component, Input } from '@angular/core';
import { Algorithm } from '../../Algorithms/Algorithm';

@Component({
    selector: 'algorithm-display',
    templateUrl: './algorithm.display.component.html',
    styleUrls: ['./algorithm.display.component.scss'],
})
export class AlgorithmDisplayComponent
{
    @Input() algorithm: Algorithm;

    public draw(): void
    {
        console.log('Algorithm Display Draw Method');
    }
}
