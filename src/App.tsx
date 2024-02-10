import { HashRouter } from "react-router-dom"
import { AppRoute } from "./components/AppRoute"


export const App = () => {
    return(
        <HashRouter>
            <AppRoute/>
        </HashRouter>
    )
}