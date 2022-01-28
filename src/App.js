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

function App() {

    const username = "Pepe"
    const img = UserImg
    const greeting = `Bienvenido ${username}`

    const [itemAddModal, setItemAddModal] = useState(false)
    const [itemDeleteModal, setItemDeleteModal] = useState(false)
    const [itemToDelete, setItemToDelete] = useState({})

    const [order, setOrder] = useState({});
    const [orderId, setOrderId] = useState("");

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar username={username} img={img} />
                <Header greeting={greeting} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cat/:tag" element={<Main />} />
                    <Route path="/item/:id" element={<ItemDetailContainer setItemAddModal={setItemAddModal} />} />
                    <Route path="/cart" element={<Cart setItemDeleteModal={setItemDeleteModal} setItemToDelete={setItemToDelete} setOrder={setOrder} setOrderId={setOrderId} />} />
                    <Route path="/order/" element={<Order order={order} orderId={orderId} />} />
                </Routes>
                {itemAddModal && <ItemAddModal setItemAddModal={setItemAddModal} />}
                {itemDeleteModal && <ItemDeleteModal setItemDeleteModal={setItemDeleteModal} itemToDelete={itemToDelete} />}
            </BrowserRouter>
        </CartContext>

    )
}

export default App;