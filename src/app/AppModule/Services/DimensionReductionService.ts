import { Injectable } from '@angular/core';

@Injectable()
export class DimensionReductionService
{
    public reduceNumbers(array: number[], dimensions?: number): number[]
    {
        if (!dimensions || array.length == dimensions) {
            return array;
        }

        let result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(
                i + 1 < array.length ? array[i] + array[i+1] : array[i]
            );

            i += 1;
        }

        return this.reduceNumbers(result, dimensions);
    }
}
