export class Figure{
    color: string
    name: string
    x: number
    y: number
    check: boolean
    checkmate: boolean
    url: string
    constructor(color: string,name: string, x: number,y:number, check: boolean, checkmate: boolean,url: string){
        this.color = color
        this.name = name
        this.x = x
        this.y = y
        this.check = check
        this.checkmate = checkmate
        this.url = url
    }
    moveFigure(color: string,name:string,x: number, y: number){
        const moves = []
        switch (name){
            case "K":
            for(let sum = 1; sum < 2;sum++){
                let sumX = x + sum
                if(sumX > 8){
                    break
                }
                else{
                    moves.push([sumX,y])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumX = x - sum
                if(sumX == 0){
                    break
                }
                else{
                    moves.push([sumX,y])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y + sum
                if(sumY > 8){
                    break
                }
                else{
                    moves.push([x,sumY])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y - sum
                if(sumY == 0){
                    break
                }
                else{
                    moves.push([x,sumY])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y + sum
                let sumX = x + sum
                if(sumY > 8 || sumX > 8){
                    break
                }
                else{
                    moves.push([sumX,sumY])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y - sum
                let sumX = x - sum
                if(sumY == 0 || sumX == 0){
                    break
                }
                else{
                    moves.push([sumX,sumY])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y + sum
                let sumX = x - sum
                if(sumY > 8 || sumX == 0){
                    break
                }
                else{
                    moves.push([sumX,sumY])
                }
            }
            for(let sum = 1; sum < 2;sum++){
                let sumY = y - sum
                let sumX = x + sum
                if(sumY == 0 || sumX > 8){
                    break
                }
                else{
                    moves.push([sumX,sumY])
                }
            }
               break
            case "Q":
                for(let sum = 1; sum < 8;sum++){
                    const summ = x + sum
                    if(summ > 8){
                        break
                    }
                    else{
                        moves.push([summ,y])
                    }
                    
                }
                for(let sum = 1; sum < 8;sum++){
                    const summ = x - sum
                    if(summ == 0){
                        break
                    }
                    else{
                        moves.push([summ,y])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const summ = y + sum
                    if(summ > 8){
                        break
                    }
                    else{
                        moves.push([x,summ])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const summ = y - sum
                    if(summ == 0){
                        break
                    }
                    else{
                        moves.push([x,summ])
                    }
                }
                for(let sum = 1; sum < 8;sum++){
                    const sumX = x + sum
                    const sumY = y + sum
                    if(sumX > 8 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x - sum
                    const sumY = y - sum
                    if(sumX == 0 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x - sum
                    const sumY = y + sum
                    if(sumX == 0 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x + sum
                    const sumY = y - sum
                    if(sumX > 8 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                break
            case "R":
                for(let sum = 1; sum < 8;sum++){
                    const summ = x + sum
                    if(summ > 8){
                        break
                    }
                    else{
                        moves.push([summ,y])
                    }
                    
                }
                for(let sum = 1; sum < 8;sum++){
                    const summ = x - sum
                    if(summ == 0){
                        break
                    }
                    else{
                        moves.push([summ,y])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const summ = y + sum
                    if(summ > 8){
                        break
                    }
                    else{
                        moves.push([x,summ])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const summ = y - sum
                    if(summ == 0){
                        break
                    }
                    else{
                        moves.push([x,summ])
                    }
                }
                break
            case "kN":
                for(let sum = 2; sum < 3; sum++){
                    let sumX = x + 2
                    let sumY = y + 1
                    if(sumX > 8 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                    
                }
                for(let sum = 2; sum < 3; sum++){
                    let sumX = x + 2
                    let sumY = y - 1
                    if(sumX > 8 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 2; sum < 3; sum++){
                    let sumX = x - 2
                    let sumY = y + 1
                    if(sumX <= 0 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                    
                }
                for(let sum = 2; sum < 3; sum++){
                    let sumX = x - 2
                    let sumY = y - 1
                    if(sumX <= 0 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 2;sum < 3; sum++){
                    let sumX = x + 1
                    let sumY = y + 2
                    if(sumX > 8 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 2;sum < 3; sum++){
                    let sumX = x + 1
                    let sumY = y - 2
                    if(sumX > 8 || sumY <= 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                        
                    }
                }
                for(let sum = 2;sum < 3; sum++){
                    let sumX = x - 1
                    let sumY = y - 2
                    if(sumY <= 0 || sumX == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 2;sum < 3; sum++){
                    let sumX = x - 1
                    let sumY = y + 2
                    if(sumY > 8 || sumX == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                break
            case "B":
                for(let sum = 1; sum < 8;sum++){
                    const sumX = x + sum
                    const sumY = y + sum
                    if(sumX > 8 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x - sum
                    const sumY = y - sum
                    if(sumX == 0 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x - sum
                    const sumY = y + sum
                    if(sumX == 0 || sumY > 8){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                for(let sum = 1;sum < 8;sum++){
                    const sumX = x + sum
                    const sumY = y - sum
                    if(sumX > 8 || sumY == 0){
                        break
                    }
                    else{
                        moves.push([sumX,sumY])
                    }
                }
                break
            case "P":
                if(color == "white" && y == 2){
                    moves.push([x,y+1],[x,y+2])
                }
                else if(color == "black" && y == 7){
                    moves.push([x,y-1],[x,y-2])
                }
                else if(color == "black"){
                    moves.push([x,y-1])
                }
                else if(color == "white"){
                    moves.push([x,y+1])
                }
            break
                
                
        }
        return moves
    }
}