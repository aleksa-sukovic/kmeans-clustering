import { Injectable } from '@angular/core';

@Injectable()
export default class PositionGenerator
{
    public generatePositionFromBound(x:number, y: number, width: number, height: number, index: number, scale: number): { x: number, y: number }
    {
        switch(index % 4) {
            case 0: return {
                x: Math.abs((width / 2 - x) % (width / 2)) * scale,
                y: Math.abs((height / 2 - y) % (height / 2)) * scale
            };
            case 1: return {
                x: width - Math.abs((width / 2 - x) % (width / 2)) * scale,
                y: Math.abs((height / 2 - y) % (height / 2)) * scale
            };
            case 2: return {
                x: Math.abs((width / 2 - x) % (width / 2)) * scale,
                y: height - Math.abs((height / 2 - y) % (height / 2)) * scale
            }
            case 3: return {
                x: width - Math.abs((width / 2 - x) % (width / 2)) * scale,
                y: height - Math.abs((height / 2 - y) % (height / 2)) * scale
            };
        }
    }

    public generateQuauterPosition(coordinates: { x: number, y: number }, index: number, horizontalScale: number, verticalScale: number): { x: number, y: number }
    {
        switch(index % 4) {
            case 0: return {
                x: coordinates.x + horizontalScale,
                y: coordinates.y + verticalScale
            }
            case 1: return {
                x: -coordinates.x - horizontalScale,
                y: coordinates.y + verticalScale
            }
            case 2: return {
                x: coordinates.x + horizontalScale,
                y: -coordinates.y + verticalScale
            }
            case 3: return {
                x: -coordinates.x -horizontalScale,
                y: -coordinates.y + verticalScale
            }
        }
    }
}
