import { Cell } from "./Cell";
import { Figure } from "./Figure";

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
                    const whiterock = new Figure("white","R",x,y,false,false,"../src/assets/figures/rook.png")
                    const cell = new Cell(whiterock,x,y)
                    board.push(cell)
                }
                else if((x == 2 && y == 1) || (x == 7 && y == 1)){
                    const whiteknight = new Figure("white","kN",x,y,false,false,"../src/assets/figures/knight.png")
                    const cell = new Cell(whiteknight,x,y)
                    board.push(cell)
                }
                else if((x == 3 && y == 1) || (x == 6 && y == 1)){
                    const whitebishop = new Figure("white","B",x,y,false,false,"../src/assets/figures/bishop.png")
                    const cell = new Cell(whitebishop,x,y)
                    board.push(cell)
                }
                else if(x == 5 && y == 1){
                    const whitequeen = new Figure("white","Q",x,y,false,false,"../src/assets/figures/queen.png")
                    const cell = new Cell(whitequeen,x,y)
                    board.push(cell)
                }
                else if(x == 4 && y == 1){
                    const whiteking = new Figure("white","K",x,y,false,false,"../src/assets/figures/king.png")
                    const cell = new Cell(whiteking,x,y)
                    board.push(cell)
                }
                else if(y == 2){
                    const whitepawn = new Figure("white","P",x,y,false,false,"../src/assets/figures/pawn.png")
                    const cell = new Cell(whitepawn,x,y)
                    board.push(cell)
                }
                else if(y == 7){
                    const blackpawn = new Figure("black","P",x,y,false,false,"../src/assets/figures/pawn1.png")
                    const cell = new Cell(blackpawn,x,y)
                    board.push(cell)
                }
                else if((x == 1 && y == 8 || (x == 8 && y == 8))){
                    const blackrock = new Figure("black","R",x,y,false,false,"../src/assets/figures/rook1.png")
                    const cell = new Cell(blackrock,x,y)
                    board.push(cell)
                }
                else if((x == 2 && y == 8 || (x == 7 && y == 8))){
                    const blackknight = new Figure("black","kN",x,y,false,false,"../src/assets/figures/knight1.png")
                    const cell = new Cell(blackknight,x,y)
                    board.push(cell)
                }
                else if((x == 3 && y == 8 || (x == 6 && y == 8))){
                    const blackbishop = new Figure("black","B",x,y,false,false,"../src/assets/figures/bishop1.png")
                    const cell = new Cell(blackbishop,x,y)
                    board.push(cell)
                }
                else if(x == 5 && y == 8){
                    const blackqueen = new Figure("black","Q",x,y,false,false,"../src/assets/figures/queen1.png")
                    const cell = new Cell(blackqueen,x,y)
                    board.push(cell)
                }
                else if(x == 4 && y == 8){
                    const blackking = new Figure("black","K",x,y,false,false,"../src/assets/figures/king1.png")
                    const cell = new Cell(blackking,x,y)
                    board.push(cell)
                }
                else{
                    const cell = new Cell(null,x,y)
                    board.push(cell)
                }
            }
        }
        return board
    }
}