import { CustomRoom } from "./components/CustomRoom";
import { Menu } from "./components/Menu";
import Room from "./components/Room";
import { RoomList } from "./components/RoomList";
import { customroomdomain, menudomain, roomdomain, roomlistdomain } from "./domains";

export const MenuRoute = {
    path: menudomain,
    el: Menu
}
export const RoomRoute = {
    path: roomdomain,
    el: Room
}
export const RoomlistRoute = {
    path: roomlistdomain,
    el: RoomList
}
export const CustomRoomRoute = {
    path: customroomdomain,
    el: CustomRoom
}