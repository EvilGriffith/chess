import { Cell } from "./Cell";


export class Board{
    createBoard(){
        const board = []
        for(let y = 0;y < 8;y++){
            for(let x = 0; x < 8;x++){
                const cell = new Cell(null,x+1,y+1)
                board.push(cell)
            }
        }
        return board
    }
    createClassicBoard(){
        const board = []
        for(let y = 1;y < 9;y++){
            for(let x = 1; x < 9;x++){
                if((x == 1 && y == 1 || (x == 8 && y == 1))){
                    const whiterock = {
                        color: "white",
                        name: "R",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/rook.png'
                    }
                    const cell = {
                        figure: whiterock,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if((x == 2 && y == 1) || (x == 7 && y == 1)){
                    const whiteknight = {
                        color: "white",
                        name: "kN",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/knight.png'
                    }
                    const cell = {
                        figure: whiteknight,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if((x == 3 && y == 1) || (x == 6 && y == 1)){
                    const whitebishop = {
                        color: "white",
                        name: "B",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/bishop.png'
                    }
                    const cell = {
                        figure: whitebishop ,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(x == 5 && y == 1){
                    const whitequeen = {
                        color: "white",
                        name: "Q",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/queen.png'
                    }
                    const cell = {
                        figure: whitequeen,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(x == 4 && y == 1){
                    const whiteking = {
                        color: "white",
                        name: "K",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/king.png'
                    }
                    const cell = {
                        figure: whiteking,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(y == 2){
                    const whitepawn = {
                        color: "white",
                        name: "P",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/pawn.png'
                    }
                    const cell = {
                        figure: whitepawn,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(y == 7){
                    const blackpawn = {
                        color: "black",
                        name: "P",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/pawn1.png'
                    }
                    const cell = {
                        figure: blackpawn,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if((x == 1 && y == 8 || (x == 8 && y == 8))){
                    const blackrock = {
                        color: "black",
                        name: "R",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/rook1.png'
                    }
                    const cell = {
                        figure: blackrock,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if((x == 2 && y == 8 || (x == 7 && y == 8))){
                    const blackknight = {
                        color: "black",
                        name: "kN",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/knight1.png'
                    }
                    const cell = {
                        figure: blackknight,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if((x == 3 && y == 8 || (x == 6 && y == 8))){
                    const blackbishop = {
                        color: "black",
                        name: "B",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/bishop1.png'
                    }
                    const cell = {
                        figure: blackbishop,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(x == 5 && y == 8){
                    const blackqueen = {
                        color: "black",
                        name: "Q",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/queen1.png'
                    }
                    const cell = {
                        figure: blackqueen,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else if(x == 4 && y == 8){
                    const blackking = {
                        color: "black",
                        name: "K",
                        x: x,
                        y: y,
                        url: '../src/assets/figures/king1.png'
                    }
                    const cell = {
                        figure: blackking,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
                else{
                    const cell = {
                        figure: null,
                        numberX: x,
                        numberY: y
                    }
                    board.push(cell)
                }
            }
        }
        return board
    }
    isHorisantalyEmpty(x: number,y:number,board: any,color: string){
        const array = []
        for(let i = 0; i < board.length;i++){
            if(board[i].numberX == x && board[i].numberY == y){
                for(let j = 0; j < board.length;j ++){
                    if(board[i].numberY == y){
                        array.push(board[i])

                    }
                }
                for(let k = 0; k < array.length;k++){
                    if((array[k].figure?.name == "Q" || array[k].figure.name == "R") && array[k].figure.color !== color){
                        return false
                    }
                    else{
                        return true
                    }
                }
            }
        }
    }
    isVerticalEmpty(){

    }
    isDiagonalEmpty(){

    }
}