import { useState } from "react"

function ItemCounter() {

    let [cantidad, setCantidad] = useState(1)

    return (
        <div className="productDetailContainer__btns">
            <div id="cantidad">
                <button onClick={() => { setCantidad(cantidad > 1 ? cantidad - 1 : cantidad) }}>-</button>
                <p>{cantidad}</p>
                <button onClick={() => { setCantidad(cantidad + 1) }}>+</button>
            </div>
            <button id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter
