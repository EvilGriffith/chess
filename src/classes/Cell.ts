export class Cell {
    figure: object | null
    numberX: number
    numberY: number
    constructor(figure: object | null, numberX: number, numberY: number){
        this.figure = figure
        this.numberX = numberX
        this.numberY = numberY
    }
}