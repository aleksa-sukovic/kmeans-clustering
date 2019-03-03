export class Constants
{
    static dataSetLabels(): { IRIS: string, WINE: string }
    {
        return {
            IRIS: 'iris',
            WINE: 'wine'
        };
    }

    static availableDataSets(): Array<{ name: string, label: string }>
    {
        return [
            { name: 'Wine', label: Constants.dataSetLabels().WINE },
            { name: 'Iris Flowers', label: Constants.dataSetLabels().IRIS }
        ];
    }
}
