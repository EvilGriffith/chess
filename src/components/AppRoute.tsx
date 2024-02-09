import { Route, Routes } from "react-router-dom"
import { CustomRoomRoute, MenuRoute, RoomRoute, RoomlistRoute } from "../routes"


export const AppRoute = () => {
    return(
        <Routes>
            <Route key={MenuRoute.path} path={MenuRoute.path} Component={MenuRoute.el}/>
            <Route key={RoomlistRoute.path} path={RoomlistRoute.path} Component={RoomlistRoute.el}/>
            <Route key={CustomRoomRoute.path} path={CustomRoomRoute.path} Component={CustomRoomRoute.el}/>
            <Route key={RoomRoute.path} path={RoomRoute.path} Component={RoomRoute.el}/>
        </Routes>
    )
}