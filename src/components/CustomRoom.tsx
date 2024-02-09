import { useState, useEffect } from "react"
import { Board } from "../classes/Board"
import { Game } from "../classes/Game"
import { Figure, Urls } from "../classes/Figure"
import "../css/Room.css"

export const CustomRoom = () => {
  const [startgame, setstartgame] = useState(false)
  const [board, setboard] = useState<any>([{}])
  const [figureselect, setfigureselect] = useState<any>(null)
  const [mmove, setmmove] = useState<number[][]>([[]])
  const [attacks, setattacks] = useState<number[][]>([[]])
  const [game, setgame] = useState<any>({})
  const [bool, setbool] = useState(false)
  const [color, setcolor] = useState<string>("")
  const [fwc, setfwc] = useState<string>("")
  const [burgerpress, setburgerpress] = useState(false)
  useEffect(() => {
    const board: any = new Board()
    let gameboard = board.createBoard()
    gameboard = gameboard.reverse()
    setboard(gameboard)
    const game = new Game(null, false, "white", "black", board)
    setgame(game)



  }, [])
  const changecolor = () => {
    if (game.colormove == "white") {
      setfigureselect(null)
      return "black"
    }
    else if (game.colormove == "black") {
      setfigureselect(null)
      return "white"
    }
  }

  const move = (figure: Figure, x: number, y: number, color: string) => {
    if (game.colormove == color) {
      setfigureselect(figure)
      const moves = figure.moveFigure(figure.color, figure.name, x, y, board)
      const attack = figure.attackFigure(figure.color, figure.name, figure.x, figure.y, board)
      setmmove(moves)

      setattacks(attack)

    }
    else {

      const attacks = figureselect.attackFigure(figureselect.color, figureselect.name, figureselect.x, figureselect.y, board)
      console.log(attacks)
      for (let i = 0; i < attacks.length; i++) {
        for (let k = 0; k < mmove.length; k++) {
          if (figure.name !== "P") {
            if ((attacks[i][0] == x && attacks[i][1] == y) && (mmove[k][0] == x && mmove[k][1] == y)) {
              const figure = figureselect
              const copyboard = board
              for (let j = 0; j < copyboard.length; j++) {
                if (copyboard[j].numberX == figureselect.x && copyboard[j].numberY == figureselect.y) {
                  copyboard[j].figure = null
                }
              }
              for (let j = 0; j < copyboard.length; j++) {
                if (copyboard[j].numberX == x && copyboard[j].numberY == y) {
                  figure.x = x
                  figure.y = y
                  copyboard[j].figure = figure
                  setboard(copyboard)
                  setmmove([[]])
                  const copygame = game
                  copygame.colormove = changecolor()
                  setgame(copygame)
                }
              }
            }
          }
          else {
            if (attacks[i][0] == x && attacks[i][1] == y) {
              const figure = figureselect
              const copyboard = board
              for (let j = 0; j < copyboard.length; j++) {
                if (copyboard[j].numberX == figureselect.x && copyboard[j].numberY == figureselect.y) {
                  copyboard[j].figure = null
                }
              }
              for (let j = 0; j < copyboard.length; j++) {
                if (copyboard[j].numberX == x && copyboard[j].numberY == y) {
                  figure.x = x
                  figure.y = y
                  copyboard[j].figure = figure
                  setboard(copyboard)
                  setmmove([[]])
                  const copygame = game
                  copygame.colormove = changecolor()
                  setgame(copygame)
                }
              }
            }
          }
        }
      }
      setfigureselect(null)
    }

  }

  const check = (x: number, y: number) => {
    for (let i = 0; i < mmove.length; i++) {
      if (mmove[i][0] === x && mmove[i][1] === y) {
        return true
      }
      else {
        continue
      }
    }

    return false
  }
  const attackcheck = (x: number, y: number, name: string) => {
    if (name !== "P") {
      for (let i = 0; i < attacks.length; i++) {
        if (attacks[i][0] === x && attacks[i][1] === y) {
          for (let j = 0; j < mmove.length; j++) {
            if (attacks[i][0] == mmove[j][0] && attacks[i][1] == mmove[j][1]) {
              return true
            }
          }
        }
        else {
          continue
        }
      }
    }
    else {
      for (let i = 0; i < attacks.length; i++) {
        if (x == attacks[i][0] && y == attacks[i][1]) {
          return true
        }
      }
    }
    return false
  }
  const stayfigure = (x: number, y: number) => {
    if (startgame) {
      for (let i = 0; i < mmove.length; i++) {
        if (mmove[i][0] == x && mmove[i][1] == y) {
          const figure = figureselect
          const copyboard = board
          for (let j = 0; j < copyboard.length; j++) {
            if (copyboard[j].numberX == figure.x && copyboard[j].numberY == figure.y) {
              copyboard[j].figure = null
            }
          }
          for (let j = 0; j < copyboard.length; j++) {
            if (x === copyboard[j].numberX && copyboard[j].numberY === y) {
              figure.x = x
              figure.y = y
              copyboard[j].figure = figure
              setboard(copyboard)
              setmmove([[]])
              setfigureselect(null)
              const copygame = game
              copygame.colormove = changecolor()
              setgame(copygame)
            }
          }

        }
      }
    }
    else {
      let url = ""
      if (color == "white" && fwc == "K") {
        url = Urls.whiteK
      }
      else if (color == "white" && fwc == "Q") {
        url = Urls.whiteQ
      }
      else if (color == "white" && fwc == "B") {
        url = Urls.whiteB
      }
      else if (color == "white" && fwc == "kN") {
        url = Urls.whitekN
      }
      else if (color == "white" && fwc == "R") {
        url = Urls.whiteR
      }
      else if (color == "white" && fwc == "P") {
        url = Urls.whiteP
      }
      else if (color == "black" && fwc == "K") {
        url = Urls.blackK
      }
      else if (color == "black" && fwc == "Q") {
        url = Urls.blackQ
      }
      else if (color == "black" && fwc == "B") {
        url = Urls.blackB
      }
      else if (color == "black" && fwc == "kN") {
        url = Urls.blackkN
      }
      else if (color == "black" && fwc == "R") {
        url = Urls.blackR
      }
      else if (color == "black" && fwc == "P") {
        url = Urls.blackP
      }
      if (color && fwc) {
        const f = new Figure(color, fwc, x, y, url)
        setbool(!bool)
        const figure = f
        const copyboard = board
        for (let i = 0; i < copyboard.length; i++) {
          if (copyboard[i].numberX == x && copyboard[i].numberY == y) {
            copyboard[i].figure = figure
            break
          }
        }
        setboard(copyboard)
      }
    }


  }
  const start = () => {
    const copygame = game
    copygame.colormove = "white"
    setgame(copygame)
    setstartgame(true)
    setburgerpress(false)

  }
  const repeat = () => {
    const newboard = new Board()
    const clearboard = newboard.createBoard()
    setstartgame(false)
    setboard(clearboard)
  }
  return (
    <div className="background">
      <div className="navbar">
        <div className="name">PXChess</div>
        <div className="repeat" onClick={repeat}/>
        <div className={startgame ? "burgeropacity" : "burger"} style={burgerpress ? { backgroundImage: `url(../src/assets/figures/back.png)` } : {}} onClick={() => { !startgame ? setburgerpress(!burgerpress) : setburgerpress(burgerpress) }} />
      </div>
      <div className="menu" style={burgerpress ? { width: "25vw" } : { width: 0 }}>
        <div className={burgerpress ? "figures" : "null"}>
          <div className={burgerpress ? "king" : "null"} onClick={() => { setfwc("K") }} style={fwc == 'K' && burgerpress ? { border: "3px solid white" } : {}} />
          <div className={burgerpress ? "queen" : "null"} onClick={() => { setfwc("Q") }} style={fwc == 'Q' && burgerpress ? { border: "3px solid white" } : {}} />
          <div className={burgerpress ? "bishop" : "null"} onClick={() => { setfwc("B") }} style={fwc == 'B' && burgerpress ? { border: "3px solid white" } : {}} />
          <div className={burgerpress ? "knight" : "null"} onClick={() => { setfwc("kN") }} style={fwc == 'kN' && burgerpress ? { border: "3px solid white" } : {}} />
          <div className={burgerpress ? "rook" : "null"} onClick={() => { setfwc("R") }} style={fwc == 'R' && burgerpress ? { border: "3px solid white" } : {}} />
          <div className={burgerpress ? "pawn" : "null"} onClick={() => { setfwc("P") }} style={fwc == 'P' && burgerpress ? { border: "3px solid white" } : {}} />
        </div>
        <div className={burgerpress ? "colorpicker" : "null"}>
          <div className={burgerpress ? "white" : "null"} onClick={() => { setcolor("white") }} style={color == "white" && burgerpress ? { backgroundColor: 'white', color: "black" } : {}}>
            {burgerpress ? "White" : ""}
          </div>
          <div className={burgerpress ? "black" : "null"} onClick={() => { setcolor("black") }} style={color == "black" && burgerpress ? { backgroundColor: 'white', color: "black" } : {}}>
            {burgerpress ? "Black" : ""}
          </div>
        </div>
        <div className={burgerpress ? "start" : "null"} onClick={start}>
          {burgerpress ? "Start Game" : ""}
        </div>
      </div>
      <div className="board">
        {board?.map(({ figure, numberX, numberY }: any, index: any) => {
          return (
            figure
              ?
              <div className="cell" style={(numberX + numberY) % 2 == 0 ? { backgroundColor: "#BA9E7B" } : { backgroundColor: "#664832" }} key={index}>
                <div className="figure" style={{ backgroundImage: `url(${figure.url})` }} onClick={() => { move(figure, numberX, numberY, figure.color) }}>
                  <div className="danger" style={attackcheck(numberX, numberY, figure.name) ? { backgroundImage: `url(../src/assets/figures/danger.png)`, cursor: 'pointer' } : {}} onClick={() => { move(figure, numberX, numberY, figure.color) }} />
                </div>
              </div>
              :
              <div className="cell" style={(numberX + numberY) % 2 == 0 ? { backgroundColor: "#BA9E7B" } : { backgroundColor: "#664832" }} key={index}>
                <div className="move" style={check(numberX, numberY) ? { backgroundImage: `url(../src/assets/figures/move.png)`, cursor: "pointer" } : {}} onClick={() => { stayfigure(numberX, numberY) }}></div>
              </div>
          )
        })}
      </div>
    </div>
  )
}