import { Board } from "./classes/Board"
import { useState, useEffect } from "react"
import "./css/App.css"
import { Figure } from "./classes/Figure"
import { Game } from "./classes/Game"




function App() {
  const [board, setboard] = useState<any>()
  const [figureselect, setfigureselect] = useState<any>(null)
  const [mmove, setmmove] = useState<number[][]>([[]])
  const [attacks, setattacks] = useState<number[][]>([[]])
  const [game, setgame] = useState<any>({})
 
  
  useEffect(() => {
    const b = new Board()
    setboard(b.createClassicBoard())
    const g = new Game("white",false,false,"white","black",board)
    setgame(g)

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

      if (figureselect) {
        const attacks = figureselect.attackFigure(figureselect.color, figureselect.name, figureselect.x, figureselect.y, board)
        for (let i = 0; i < attacks.length; i++) {
          for (let k = 0; k < mmove.length; k++) {
            if (figureselect.name !== "P") {
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
                    newmove()
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
                    newmove()
                  }
                }
              }
            }
          }
        }
        setfigureselect(null)
      }
    }

  }
  const newmove = () => {
    setfigureselect(null)
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
  const attackcheck = (x: number, y: number) => {
    if (figureselect?.name !== "P") {
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
            const copygame = game
            copygame.colormove = changecolor()
            setgame(copygame)
            newmove()
          }
        }

      }
    }


  }

  return (
    <div className="background">
      <div className="board">
        {board?.map(({ figure, numberX, numberY }: any, index: any) => {
          return (
            figure
              ?
              <div className="cell" style={(numberX + numberY) % 2 == 0 ? { backgroundColor: "#BA9E7B" } : { backgroundColor: "#664832" }} key={index}>
                <div className="figure" style={{ backgroundImage: `url(${figure.url})` }} onClick={() => { move(figure, numberX, numberY, figure.color) }}>
                  <div className="danger" style={attackcheck(numberX, numberY) ? { backgroundImage: `url(../src/assets/figures/danger.png)`, cursor: 'pointer' } : {}} onClick={() => { move(figure, numberX, numberY, figure.color) }} />
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

export default App
