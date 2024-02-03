export class Game {
    colormove: string
    gamestopped: boolean
    kingincheck: boolean
    constructor(colormove:string, gamestopped: boolean, kingincheck: boolean) {
        this.colormove = colormove
        this.gamestopped = gamestopped
        this.kingincheck = kingincheck
    }
}