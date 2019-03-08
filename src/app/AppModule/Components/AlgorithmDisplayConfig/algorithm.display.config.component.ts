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
            xScale: new FormControl(30),
            yScale: new FormControl(60),
            xOffset: new FormControl(0),
            yOffset: new FormControl(0),
        });
    }

    submit()
    {
        this.configurationSelected.emit(this.configForm.value);
    }
}
