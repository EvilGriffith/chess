export class Game {
    colormove: string | null
    gamestopped: boolean
    
    player1: string | null
    player2: string | null
    board: object[]
    constructor(colormove:string | null, gamestopped: boolean, player1:string | null,player2:string | null,board: object[]) {
        this.colormove = colormove
        this.gamestopped = gamestopped
        this.player1 = player1
        this.player2 = player2
        this.board = board
    }
}