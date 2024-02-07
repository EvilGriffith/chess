import { Board } from "./classes/Board"
import { useState, useEffect } from "react"
import "./css/App.css"
import { Figure } from "./classes/Figure"
import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore"
import { db } from "./main"




function App() {
  const [board, setboard] = useState<any>()
  const [figureselect, setfigureselect] = useState<any>(null)
  const [mmove, setmmove] = useState<number[][]>([[]])
  const [attacks, setattacks] = useState<number[][]>([[]])
  const [game, setgame] = useState<any>({})
  const [currentplayer, setcurrentplayer] = useState<string>("")
  const [docid, setdocid] = useState<string>("white")
  const [chek, setcheck] = useState(0)
  const col = collection(db, "game")

  const fetchgame = async () => {
    const querygames = await getDocs(col)
    const games = querygames.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    if (games.length <= 1) {
      setcurrentplayer("white")
      const b = new Board()
      const bb = b.createClassicBoard()
      const newgame = {
        colormove: "white",
        gamestopped: false,
        player1: "white",
        player2: null,
        board: bb
      }
      await addDoc(col, newgame)
      setcheck(1)

    }
    else {
      setcurrentplayer("black")
      setcheck(1)

    }
  }
  console.log(currentplayer)
  const loadgame = async () => {
    const querygames: any = query(col)
    onSnapshot(querygames, (sn: any) => {
      const games: any = []
      sn.forEach((doc: any) => {
        games.push({ ...doc.data(), id: doc.id })
        if (currentplayer == "white") {
          setdocid(games[0].id)
          setgame(games[0])
          setboard(games[0].board.reverse())
        }
        else {
          setdocid(games[0].id)
          setgame(games[0])
          setboard(games[0].board)
        }
      })

    })
  }

  useEffect(() => {
    if (chek == 0) {
      fetchgame()
    }
    loadgame()
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

  const move = async(name: string, figure: any, x: number, y: number, color: string) => {
    if (game.colormove == color && currentplayer == color) {
      setfigureselect(figure)
      const f = new Figure(color, name, x, y, "")
      const moves = f.moveFigure(f.color, f.name, x, y, board)
      const attack = f.attackFigure(f.color, f.name, f.x, f.y, board)
      const checkhorplus = f.kingincheckhor(color,y + 1,board)
      const checkhorminus = f.kingincheckhor(color,y - 1,board)
      if(name == "K"){
        if(checkhorplus || checkhorminus){
          const newmoves = []
          for(let i = 0;i < moves.length;i++){
            if(checkhorplus !== moves[i][1] || checkhorminus !== moves[i][1]){
              console.log("add")
              newmoves.push(moves[i])
            }
            else if(i == moves.length - 1){
              setmmove(newmoves)
            }
            else{
              continue
            }
          }
        }
        else{
          setmmove(moves)
          setattacks(attack)
        }
      }
      else{
        setmmove(moves)
        setattacks(attack)
      }
    }
    //dsajkdkjask
    else {
      if (figureselect) {
        const f = new Figure(figureselect.color, figureselect.name, figureselect.x, figureselect.y, figureselect.url)
        const attacks = f.attackFigure(figureselect.color, figureselect.name, figureselect.x, figureselect.y, board)
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
                    setmmove([[]])
                    const copygame = game
                    const docref = doc(db, 'game', docid)
                    if (currentplayer == "white") {
                      copygame.board = copyboard
                      copygame.colormove = "black"
                    }
                    else {
                      copygame.board = copyboard
                      copygame.colormove = "white"
                    }
                    await updateDoc(docref, copygame)
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
  const stayfigure = async (x: number, y: number) => {
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
            setmmove([[]])
            const copygame = game
            const docref = doc(db, 'game', docid)

            if (currentplayer == "white") {
              copygame.board = copyboard
              copygame.colormove = "black"
            }
            else {
              copygame.board = copyboard
              copygame.colormove = "white"
            }
            await updateDoc(docref, copygame)
            newmove()
          }
        }

      }
    }


  }

  return (
    <div className="background">
      <div className="board" style={ currentplayer == "white" ? {transform: `rotate(180deg)`, boxShadow: `0px 0px 10px 10px black`} : {}}>
        {board?.map(({ figure, numberX, numberY }: any, index: any) => {
          return (
            figure
              ?
              <div className="cell" style={(numberX + numberY) % 2 == 0 ? { backgroundColor: "#BA9E7B" } : { backgroundColor: "#664832" }} key={index}>
                <div className="figure" style={ currentplayer == "white" ? {transform: `rotate(180deg)`, backgroundImage: `url(${figure.url})`} : {backgroundImage: `url(${figure.url})`}} onClick={() => { move(figure.name, figure, numberX, numberY, figure.color) }}>
                  <div className="danger" style={attackcheck(numberX, numberY) ? { backgroundImage: `url(../src/assets/figures/danger.png)`, cursor: 'pointer' } : {}} onClick={() => { move(figure.name, figure, numberX, numberY, figure.color) }} />
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
