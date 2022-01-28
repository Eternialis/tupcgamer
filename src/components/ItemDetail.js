import ItemCounter from "./ItemCounter"
import { context } from "./CartContext"
import { useState, useContext } from "react"

function ItemDetail({ item, setItemAddModal, user }) {

    const { name, price, tag, img } = item

    const [cantidad, setCantidad] = useState(1)

    const { cartReducer } = useContext(context)

    const handleClick = () => {
        user &&
            cartReducer({
                item,
                cantidad: cantidad,
                status: "agregar"
            })
        setItemAddModal(true)
    }

    return (
        <div className="productDetailContainer">
            <img src={img} alt="" className="productDetailContainer__img" />
            <div className="productDetailContainer__text">
                <h1 href="/#" className="productContainer__Title">{name}</h1>
                <p>{tag}</p>
                <h3>$ {price}</h3>
                <div className="productsContainer__Btns">
                    <button id="agregar" onClick={handleClick}>Agregar al carrito</button>
                    <ItemCounter onAdd={setCantidad} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
