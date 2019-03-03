import { Component } from '@angular/core';
import { DataService } from '../../Services/Data/DataService';
import { Constants } from '../../constants';

@Component({
    selector: 'details-component',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent
{
    constructor(
        private dataService: DataService
    )
    {
        this.dataService.getData(Constants.availableDataSets()[0].label).subscribe(data => {
            console.log(data);
        });
     }
}
