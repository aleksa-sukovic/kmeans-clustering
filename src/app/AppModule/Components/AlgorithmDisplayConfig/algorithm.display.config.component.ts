import { Component, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Algorithm } from '../../Algorithms/Algorithm';

@Component({
    selector: 'algorithm-display-config',
    templateUrl: './algorithm.display.config.component.html',
    styleUrls: ['./algorithm.display.config.component.scss'],
})
export class AlgorithmDisplayConfigComponent
{
    protected configForm: FormGroup;
    @Output() configurationSelected = new EventEmitter();
    @Input() algorithm: Algorithm;

    constructor()
    {
        this.configForm = new FormGroup({
            scale: new FormControl(1)
        });
    }

    submit()
    {
        this.configurationSelected.emit(this.configForm.value);
    }
}
