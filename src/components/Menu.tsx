import { Link } from 'react-router-dom'
import '../css/Menu.css'
import { customroomdomain, roomlistdomain } from '../domains'

export const Menu = () => {
    return(
        <div className="background">
            <div className='logo'>PXChess</div>
            <Link to={roomlistdomain} className='link'><div className='butonline'>Play Online</div></Link>
            <Link to={customroomdomain} className='link'><div className='butcustom'>Custom Game</div></Link>
        </div>
    )
}