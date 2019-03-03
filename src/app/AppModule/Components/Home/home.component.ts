import { Component, ViewChild } from '@angular/core';
import { AlgorithmFactory } from '../../Factories/AlgorithmFactory';
import { Algorithm } from '../../Algorithms/Algorithm';
import { AlgorithmDisplayComponent } from '../AlgorithmDisplay/algorithm.display.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent
{
    protected algorithm: Algorithm;
    @ViewChild(AlgorithmDisplayComponent) protected algorithmDisplay: AlgorithmDisplayComponent;

    constructor(private algorithmFactory: AlgorithmFactory) {  }

    public onConfigurationSelected(configuration: any)
    {
        this.algorithmFactory.make(configuration).subscribe(algorithm => {
            this.algorithm = algorithm;
        });
    }

    public onNextIteration()
    {
        this.algorithmDisplay.draw();
    }
}
