import { Component, Inject } from '@angular/core';
import { DataService } from '../../Services/Data/DataService';

@Component({
    selector: 'details-component',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent
{
    constructor(
        private dataService: DataService,
        @Inject('DATA_WINE') private DATA_WINE: string,
        @Inject('DATA_IRIS') private DATA_IRIS: string
    )
    {
        this.dataService.getData(DATA_WINE).subscribe(data => {
            console.log(data);
        });
     }
}
