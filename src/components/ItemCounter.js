import { useState } from "react"

function ItemCounter({ onAdd }) {

    let [cantidad, setCantidad] = useState(1)

    const contadorMenos = () => {
        setCantidad(cantidad > 1 ? cantidad = cantidad - 1 : cantidad)
        onAdd(cantidad)
    }
    const contadorMas = () => {
        setCantidad(cantidad = cantidad + 1)
        onAdd(cantidad)
    }

    return (
        <div id="cantidad">
            <button onClick={contadorMenos}>-</button>
            <p>{cantidad}</p>
            <button onClick={contadorMas}>+</button>
        </div>
    )
}

export default ItemCounter
