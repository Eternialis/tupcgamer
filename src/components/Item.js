import productImg from "../assets/img/productos/Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-med.jpg"
import { useState } from "react"

function Item({ name, tag, price }) {

    let [cantidad, setCantidad] = useState(1)

    return (

        <div className="productsContainer__card">
            <img src={productImg} alt="" className="productsContainer__img" />
            <div className="productsContainer__text">
                <a href="/#" className="productsContainer__Title">{name}</a>
                <p>{tag}</p>
                <h4>{price}</h4>
                <div className="productsContainer__Btns">
                    <div id="cantidad">
                        <button onClick={() => { setCantidad(cantidad > 1 ? cantidad - 1 : cantidad) }}>-</button>
                        <p>{cantidad}</p>
                        <button onClick={() => { setCantidad(cantidad + 1) }}>+</button>
                    </div>
                    <button id="agregar">Agregar al carrito</button>
                </div>
            </div>
        </div>

    )
}

export default Item
