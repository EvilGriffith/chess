import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./components/AppRoute"


export const App = () => {
    return(
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
    )
}