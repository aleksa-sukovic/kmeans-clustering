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
    protected displayConfiguration: any;
    @ViewChild(AlgorithmDisplayComponent) protected algorithmDisplay: AlgorithmDisplayComponent;

    constructor(private algorithmFactory: AlgorithmFactory) {  }

    public onAlgorithmConfigurationSelected(configuration: any)
    {
        if (this.algorithmDisplay) {
            this.algorithmDisplay.clear();
            this.algorithmDisplay.resetColours();
        }

        this.algorithmFactory.make(configuration).subscribe(algorithm => {
            this.algorithm = algorithm;
        });
    }

    public onDisplayConfigurationSelected(configuration: any)
    {
        this.algorithmDisplay.configuration = configuration;

        this.algorithmDisplay.draw();
    }

    public onNextIteration()
    {
        this.algorithmDisplay.draw();
    }
}
