import { Component } from '@angular/core';
import { DataService } from '../../Services/Data/DataService';
import { DataSet } from '../../Models/DataSet';

@Component({
    selector: 'details-component',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent
{
    private selected: DataSet;
    private semaphores: { loading: boolean }

    constructor(
        private dataService: DataService
    )
    {
        this.semaphores = {
            loading: false
        };
    }

     onDataSetSelected(value: string)
     {
         this.getDataSet(value);
     }

     private getDataSet(label: string): void
     {
        this.semaphores.loading = true;

        this.dataService.getData(label).subscribe(dataSet => {
            this.selected = dataSet;

            this.semaphores.loading = false;
        });
     }
}
