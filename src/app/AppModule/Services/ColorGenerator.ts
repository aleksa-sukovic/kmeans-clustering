import { Injectable } from '@angular/core';

@Injectable()
export default class ColorGenerator
{
    public generate(count?: number): Array<string>
    {
        if (!count) {
            count = 1;
        }

        let result = new Array<string>();

        for (let i = 0; i < count; i++) {
            result.push(this.generateColor());
        }

        return result;
    }

    protected generateColor(): string
    {
        let letters = '0123456789ABCDEF';
        let color   = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
}
