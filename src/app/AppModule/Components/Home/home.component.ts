import { Component } from '@angular/core';
import { AlgorithmFactory } from '../../Factories/AlgorithmFactory';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent
{
    constructor(private algorithmFactory: AlgorithmFactory) {  }

    public onConfigurationSelected(configuration: any)
    {
        this.algorithmFactory.make(configuration).subscribe(algorithm => {
            console.log(algorithm);
        });
    }
}
