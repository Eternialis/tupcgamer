import NavBar from "./components/NavBar";
import Header from "./components/Header"
import UserImg from "./assets/img/usuario/usernamemini.jpg"
import Main from "./components/Main"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

    const username = "Username"
    const img = UserImg
    const greeting = `Bienvenido ${username}`

    return (
        <BrowserRouter>
            <NavBar username={username} img={img} />
            <Header greeting={greeting} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cat/:tag" element={<Main />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;