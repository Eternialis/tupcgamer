import { useState } from "react"

function Item({ name, tag, price, img }) {

    let [cantidad, setCantidad] = useState(1)

    return (
        <div className="productsContainer__card">
            <img src={img} alt="" className="productsContainer__img" />
            <div className="productsContainer__text">
                <a href="/#" className="productsContainer__Title">{name}</a>
                <p>{tag}</p>
                <h4>$ {price}</h4>
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
