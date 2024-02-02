import { Board } from "./classes/Board"
import { useState, useEffect } from "react"
import "./css/App.css"


function App() {
  const [board,setboard] = useState<object[]>()
  const [mmove,setmmove] = useState<any>()
  useEffect(()=> {
    const board = new Board()
    let game = board.createClassicBoard()
    game = game.reverse()
    setboard(game)
    
  },[])
  
  
  const move = (figure: any,x: number, y: Number,) => {
    const moves = figure.moveFigure(figure.color,figure.name,x,y)
    setmmove(moves)
    console.log(mmove)
  }
  const check = (x: number,y:number) => {
    if(mmove[0][0]){
      console.log(true)
    for(let i = 0; mmove.length;i++){
      if(mmove[i][0] == x, mmove[i][1] == y){
        return true
      }
      else{
        continue
      }
    }
  }
    return false
  }
  return (
   <div className="background">
    <div className="board">
        {board?.map(({figure,numberX,numberY}:any)=> {
          return(
            figure 
            ? 
            <div className="cell" style={(numberX + numberY) % 2 == 0 ? {backgroundColor: "#BA9E7B"} : {backgroundColor: "#664832"}}>
             <div className="figure" style={{backgroundImage: `url(${figure.url})`}} onClick={() => {move(figure, numberX,numberY)}}></div>
            </div> 
            : 
            <div className="cell" style={(numberX + numberY) % 2 == 0 ? {backgroundColor: "#BA9E7B"} : {backgroundColor: "#664832"}}>
              {/* <div className="move" style={ check(numberX,numberY) ? {backgroundImage: `url(../src/assets/figures/move.png)`} : {}}></div> */}
            </div>
          )
        })}
    </div>
   </div>
  )
}

export default App
