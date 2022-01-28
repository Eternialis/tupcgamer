import NavBar from "./components/NavBar";
import Header from "./components/Header"
import UserImg from "./assets/img/usuario/usernamemini.jpg"
import Cart from "./components/Cart";
import Main from "./components/Main"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartContext from "./components/CartContext";
import ItemAddModal from "./components/ItemAddModal";
import ItemDeleteModal from "./components/ItemDeleteModal";
import Order from "./components/Order";
import Login from "./components/Login";
import Signin from "./components/Signin";

function App() {

    const [infoUsuario, setInfoUsuario] = useState({});
    const { user, nombres } = infoUsuario
    const img = UserImg
    const greeting = `Bienvenido ${nombres}`

    const [itemAddModal, setItemAddModal] = useState(false)
    const [itemDeleteModal, setItemDeleteModal] = useState(false)
    const [itemToDelete, setItemToDelete] = useState({})

    const [order, setOrder] = useState({});
    const [orderId, setOrderId] = useState("");

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar user={user} img={img} />
                <Header greeting={greeting} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cat/:tag" element={<Main />} />
                    <Route path="/item/:id" element={<ItemDetailContainer setItemAddModal={setItemAddModal} user={user} />} />
                    <Route path="/cart" element={<Cart setItemDeleteModal={setItemDeleteModal} setItemToDelete={setItemToDelete} setOrder={setOrder} setOrderId={setOrderId} />} />
                    <Route path="/order/" element={<Order order={order} orderId={orderId} />} />
                    <Route path="/login" element={<Login setInfoUsuario={setInfoUsuario} />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
                {itemAddModal && <ItemAddModal setItemAddModal={setItemAddModal} user={user} />}
                {itemDeleteModal && <ItemDeleteModal setItemDeleteModal={setItemDeleteModal} itemToDelete={itemToDelete} />}
            </BrowserRouter>
        </CartContext>

    )
}

export default App;