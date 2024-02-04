export class Game {
    colormove: string
    gamestopped: boolean
    kingincheck: boolean
    player1: string
    player2: string | null
    board: object[]
    constructor(colormove:string, gamestopped: boolean, kingincheck: boolean, player1:string,player2:string | null,board: object[]) {
        this.colormove = colormove
        this.gamestopped = gamestopped
        this.kingincheck = kingincheck
        this.player1 = player1
        this.player2 = player2
        this.board = board
    }
}