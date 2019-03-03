import { Component } from '@angular/core';
import { AlgorithmFactory } from '../../Factories/AlgorithmFactory';
import { Algorithm } from '../../Algorithms/Algorithm';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent
{
    protected algorithm: Algorithm;

    constructor(private algorithmFactory: AlgorithmFactory) {  }

    public onConfigurationSelected(configuration: any)
    {
        this.algorithmFactory.make(configuration).subscribe(algorithm => {
            this.algorithm = algorithm;
        });
    }

    public onNextIteration()
    {
        console.log('Refresh Canvas');
    }
}
