import { Component } from '@angular/core';
import { DataService } from '../../Services/Data/DataService';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent
{
    constructor(private dataService: DataService) {  }

    onDataSetSelected(label: string)
    {
        this.dataService.getData(label).subscribe(dataSet => {
            console.log(dataSet);
        });
    }
}
