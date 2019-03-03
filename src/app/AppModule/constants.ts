export class Constants
{
    static dataSetLabels(): { IRIS: string, WINE: string, PLANE: string }
    {
        return {
            IRIS: 'iris',
            WINE: 'wine',
            PLANE: 'plane'
        };
    }

    static availableDataSets(): Array<{ name: string, label: string }>
    {
        return [
            { name: 'Wine', label: Constants.dataSetLabels().WINE },
            { name: 'Iris Flowers', label: Constants.dataSetLabels().IRIS },
            { name: 'Plane Dots', label: Constants.dataSetLabels().PLANE }
        ];
    }
}
