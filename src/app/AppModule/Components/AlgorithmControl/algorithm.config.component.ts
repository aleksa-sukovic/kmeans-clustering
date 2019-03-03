import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Constants } from '../../constants';

@Component({
    selector: 'algorithm-config',
    templateUrl: './algorithm.config.component.html',
    styleUrls: ['./algorithm.config.component.scss'],
})
export class AlgorithmConfigComponent
{
    protected controlForm: FormGroup;
    protected availableDataSets: Array<{ name: string, label: string }>;
    @Output() configurationSelected = new EventEmitter();

    constructor()
    {
        this.availableDataSets = Constants.availableDataSets();

        this.controlForm = new FormGroup({
            maxIterations: new FormControl(10),
            clusterCount: new FormControl(2),
            dataSetLabel: new FormControl(this.availableDataSets[0].label)
        });
    }

    initializeAlgorithm()
    {
        this.configurationSelected.emit(this.controlForm.value);
    }
}
