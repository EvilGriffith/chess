import { useEffect,useState } from "react"
import "../css/RoomList.css"
import {  addDoc, collection,  onSnapshot, query, } from "firebase/firestore"
import { db } from "../main"
import { roomdomain } from "../domains"
import { Link } from "react-router-dom"
import { Board } from "../classes/Board"


export const RoomList = () => {
    const col = collection(db,"game")
    const [rooms, setrooms] = useState<object[]>([])
    const [newgamepress,setnewgamepress] = useState(false)
    const [classicroompress,setclassicroompress] = useState(false)
    const [name,setname] = useState("Create new game")
    useEffect(() => {
        const querygames: any = query(col)
        onSnapshot(querygames, (sn: any) => {
          const games: any = []
          sn.forEach((doc: any) => {
            games.push({ ...doc.data(), id: doc.id })
            setrooms(games)
          }
            )
    
        })
    }, [])
    const handlecreate = async() => {
        const col = collection(db,"game")
        const classb = new Board()
        const board = classb.createClassicBoard()
        const game = {
            colormove: "white",
            gamestopped: false,
            player1: null,
            player2: null,
            board: board,
            roomid: Math.floor(Math.random() * 250) + 1
        }
        await addDoc(col,game)
        setname("Your game was been create!")
        setTimeout(() => {
            setname("Create new game")
        }, 5000);
    }
    console.log(rooms.length)
    return (
        <div className="background">
            <div className="window">
                <div className="chooselist">
                <div className="newgame" style={newgamepress ? {backgroundColor: "white" ,color: "black"} : {}} onClick={() => {setnewgamepress(true); setclassicroompress(false)}}>
                    New Game
                </div>
                <div className="classiclist" style={classicroompress ? {backgroundColor: "white",color: "black"} : {}} onClick={() => {setclassicroompress(true); setnewgamepress(false)}}>
                    Classic Rooms
                </div>
                <div className="customlist">
                    Cooming Soon....
                </div>
                </div>
                <div className="rs">
                    {
                        newgamepress && !classicroompress
                        ?
                        <div className="createbut" onClick={handlecreate}>{name}</div>
                        :
                        rooms.map(({id,roomid}: any) => { return(
                            rooms.length !== 0
                            ?
                             <Link className="link" to={roomdomain} state={id}><div className="room">{'Room: ' + roomid}</div></Link>
                            :
                            <div className="nogame">No games available</div>
                        )
                        })
                    }
                </div>
            </div>
        </div>
    )
}