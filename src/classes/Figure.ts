export enum Urls{
    whiteP = "../src/assets/figures/pawn.png",
    whiteK = "../src/assets/figures/king.png",
    whiteQ = "../src/assets/figures/queen.png",
    whiteB = "../src/assets/figures/bishop.png",
    whitekN = "../src/assets/figures/knight.png",
    whiteR = "../src/assets/figures/rook.png",
    blackK = "../src/assets/figures/king1.png",
    blackQ = "../src/assets/figures/queen1.png",
    blackB = "../src/assets/figures/bishop1.png",
    blackkN = "../src/assets/figures/knight1.png",
    blackR = "../src/assets/figures/rook1.png",
    blackP = "../src/assets/figures/pawn1.png"
}

export class Figure {
    color: string
    name: string
    x: number
    y: number
    url: string
    constructor(color: string, name: string, x: number, y: number, url: string) {
        this.color = color
        this.name = name
        this.x = x
        this.y = y
        this.url = url
    }
    moveFigure(color: string, name: string, x: number, y: number, board: any) {
        const filtredboard = board.filter(({ figure }: any) => { return figure })
        const moves = []
        switch (name) {
            case "K":
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {

                            stop = true
                        }
                    }
                    if (sumY > 8) {
                        break
                    }
                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumY == 0) {
                        break
                    }
                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }

                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                break
            case "Q":
                // движение в право

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в лево

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в верх

                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumY > 8) {
                        break
                    }

                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumY == 0) {
                        break
                    }

                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в лево-верх 

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в право-низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в лево- низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в право- верх

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                break
            case "R":
                // движение в право

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в лево

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y) {
                            stop = true
                        }
                    }
                    if (sumX == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, y])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в верх

                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumY > 8) {
                        break
                    }

                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                // движение в низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumY == 0) {
                        break
                    }

                    else {
                        moves.push([x, sumY])
                    }
                    if (stop) {
                        break
                    }

                }
                break
            case "kN":
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 2
                    let sumY = y + 1
                    if (sumX > 8 || sumY > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }

                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 2
                    let sumY = y - 1
                    if (sumX > 8 || sumY == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 2
                    let sumY = y + 1
                    if (sumX <= 0 || sumY > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }

                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 2
                    let sumY = y - 1
                    if (sumX <= 0 || sumY == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 1
                    let sumY = y + 2
                    if (sumX > 8 || sumY > 8) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 1
                    let sumY = y - 2
                    if (sumX > 8 || sumY <= 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])

                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 1
                    let sumY = y - 2
                    if (sumY <= 0 || sumX == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 1
                    let sumY = y + 2
                    if (sumY > 8 || sumX == 0) {
                        break
                    }
                    else {
                        moves.push([sumX, sumY])
                    }
                }
                break
            case "B":
                // движение в лево-верх 

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в право-низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в лево- низ

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX > 8 || sumY == 0) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                // движение в право- верх

                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY) {
                            stop = true
                        }
                    }
                    if (sumX == 0 || sumY > 8) {
                        break
                    }

                    else {
                        moves.push([sumX, sumY])
                    }
                    if (stop) {
                        break
                    }
                }
                break
            case "P":
                for (let i = 0; i < filtredboard.length; i++) {

                    if ((color == "white" && filtredboard[i].figure.y == y + 1) || (color == "black" && filtredboard[i].figure.y == y - 1) || (color == "white" && filtredboard[i].figure.y == y + 2) || (color == "black" && filtredboard[i].figure.y == y - 2)) {
                        break
                    }
                    else if (color == "white" && y == 2) {
                        moves.push([x, y + 1], [x, y + 2])
                        break
                    }
                    else if (color == "black" && y == 7) {
                        moves.push([x, y - 1], [x, y - 2])
                        break
                    }
                    else if (color == "black") {
                        moves.push([x, y - 1])
                        break
                    }
                    else if (color == "white") {
                        moves.push([x, y + 1])
                        break
                    }
                }
                break


        }
        return moves
    }
    attackFigure(color: string, name: string, x: number, y: number, board: any) {
        const enemyfigures = board.filter(({ figure }: any) => { return figure?.color !== color })
        const filtredboard = enemyfigures.filter(({ figure }: any) => { return figure })
        const attacks = []
        switch (name) {
            case "K":
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                        }
                        else if (sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                        }
                        else if (sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                        }
                        else if (sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                        }
                        else if (sumY == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumY > 8 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumY == 0 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x - sum
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumY > 8 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 2; sum++) {
                    let sumX = x + sum
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumY == 0 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                break
            case "Q":
                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                            stop = true
                            break
                        }
                        else if (sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                            stop = true
                            break
                        }
                        else if (sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY == 0 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY == 0 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                break
            case "kN":
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 2
                    let sumY = y + 1
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX > 8 || sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 2
                    let sumY = y - 1
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX > 8 || sumY == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 2
                    let sumY = y + 1
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX <= 0 || sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 2
                    let sumY = y - 1
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX <= 0 || sumY == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 1
                    let sumY = y + 2
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX > 8 || sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x + 1
                    let sumY = y - 2
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX < 8 || sumY <= 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 1
                    let sumY = y - 2
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX == 0 || sumY <= 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                for (let sum = 2; sum < 3; sum++) {
                    let sumX = x - 1
                    let sumY = y + 2
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                        }
                        else if (sumX == 0 || sumY > 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }
                }
                break

            case "R":
                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                            stop = true
                            break
                        }
                        else if (sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == y && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, y])
                            stop = true
                            break
                        }
                        else if (sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == x && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([x, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                break
            case "B":
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY == 0 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y + sum
                    let sumX = x - sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY > 8 || sumX == 0) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                for (let sum = 1; sum < 8; sum++) {
                    let sumY = y - sum
                    let sumX = x + sum
                    let stop = false
                    for (let i = 0; i < filtredboard.length; i++) {
                        if (filtredboard[i].figure.x == sumX && filtredboard[i].figure.y == sumY && filtredboard[i].figure.name !== "K") {
                            attacks.push([sumX, sumY])
                            stop = true
                            break
                        }
                        else if (sumY == 0 || sumX > 8) {
                            stop = true
                        }
                    }
                    if (stop) {
                        break
                    }

                }
                break
            case "P":
                for (let i = 0; i < filtredboard.length; i++) {
                    if (color == "white" && (filtredboard[i].figure.x == x + 1 && filtredboard[i].figure.y == y + 1) && filtredboard[i].figure.name !== "K") {
                        attacks.push([x + 1, y + 1])
                    }
                    else if (color == "white" && (filtredboard[i].figure.x == x - 1 && filtredboard[i].figure.y == y + 1) && filtredboard[i].figure.name !== "K") {
                        attacks.push([x - 1, y + 1])
                    }
                    else if (color == "black" && (filtredboard[i].figure.x == x + 1 && filtredboard[i].figure.y == y - 1) && filtredboard[i].figure.name !== "K") {
                        attacks.push([x + 1, y - 1])
                    }
                    else if (color == "black" && (filtredboard[i].figure.x == x - 1 && filtredboard[i].figure.y == y - 1) && filtredboard[i].figure.name !== "K") {
                        attacks.push([x - 1, y - 1])
                    }

                }
                break
        }
        return attacks
    }
    kingincheckhor(color: string, y: number, board: any) {
        const enemyfigures = board.filter(({ figure }: any) => { return figure?.color !== color })
        const filtredboard = enemyfigures.filter(({ figure }: any) => { return figure })
        for (let i = 0; i < board.length; i++) {
            if (board[i].numberY == y) {
                for (let j = 0; j < filtredboard.length; j++) {
                    if (filtredboard[j].figure.y == board[i].numberY) {
                        if (filtredboard[j].figure.name == "Q" || filtredboard[j].figure.name == "R") {
                            return y
                        }
                        else {
                            continue
                        }
                    }
                    else if(j == filtredboard.length - 1){
                        return false
                    }
                    else{
                        continue
                    }
                }
            }
            else if(i == 63){
                return false
            }
            else{
                continue
            }
        }
    }
    kingincheckver(color: string, x: number, board: any){
        const enemyfigures = board.filter(({ figure }: any) => { return figure?.color !== color })
        const filtredboard = enemyfigures.filter(({ figure }: any) => { return figure })
        for (let i = 0; i < board.length; i++) {
            if (board[i].numberX == x) {
                for (let j = 0; j < filtredboard.length; j++) {
                    if (filtredboard[j].figure.x == board[i].numberX) {
                        if (filtredboard[j].figure.name == "Q" || filtredboard[j].figure.name == "R") {
                            return x
                        }
                        else {
                            continue
                        }
                    }
                    else if(j == filtredboard.length - 1){
                        return false
                    }
                    else{
                        continue
                    }
                }
            }
            else if(i == 63){
                return false
            }
            else{
                continue
            }
        }
    }
}