import { useEffect,useState } from "react"
import "../css/RoomList.css"
import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore"
import { db } from "../main"
import { roomdomain } from "../domains"

export const RoomList = ({navigation}: any) => {
    const col = collection(db,"game")
    const [rooms, setrooms] = useState<object[]>([])
    const [newgamepress,setnewgamepress] = useState(false)
    const [classicroompress,setclassicroompress] = useState(false)
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
console.log(rooms)
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
                        classicroompress
                        ?
                        rooms.map(({id}: any) => {
                            return <div className="room" onClick={navigation.navigate(roomdomain,{id: id})}>{id}</div>
                        })
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}