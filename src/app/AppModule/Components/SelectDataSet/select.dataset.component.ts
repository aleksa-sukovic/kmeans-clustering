import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Constants } from '../../constants';

@Component({
    selector: 'select-dataset',
    templateUrl: './select.dataset.component.html',
    styleUrls: ['./select.dataset.component.scss'],
})
export class SelectDataset implements OnInit
{
    private availableDataSets: Array<{ name: string, label: string }>;
    @Output() datasetSelected = new EventEmitter();

    constructor()
    {
        this.availableDataSets = Constants.availableDataSets();
    }

    ngOnInit(): void
    {
        if (this.availableDataSets.length) {
            this.selectDataset(this.availableDataSets[0].label);
        }
    }

    onChange(value: string)
    {
        this.selectDataset(value);
    }

    selectDataset(label: string)
    {
        this.datasetSelected.emit(label);
    }
}
