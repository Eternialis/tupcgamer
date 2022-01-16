import NavBar from "./components/NavBar";
import Header from "./components/Header"
import UserImg from "./assets/img/usuario/usernamemini.jpg"
import Cart from "./components/Cart";
import Main from "./components/Main"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import { useState } from "react";
import CartContext from "./components/CartContext";


function App() {

    const username = "Username"
    const img = UserImg
    const greeting = `Bienvenido ${username}`

    const [modal, setModal] = useState(false)

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar username={username} img={img} />
                <Header greeting={greeting} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cat/:tag" element={<Main />} />
                    <Route path="/item/:id" element={<ItemDetailContainer setModal={setModal} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                {modal && <Modal setModal={setModal} />}
            </BrowserRouter>
        </CartContext>

    )
}

export default App;