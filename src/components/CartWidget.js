import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { context } from './CartContext'

function CartWidget() {

    const { cantidadTotal } = useContext(context)

    return (
        <Link to={"/cart"} id="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <p id="cantidadProductos">{cantidadTotal}</p>
            <div id="list">
                <ul>

                </ul>
                <div>
                    <button id="finalizarCompra">Finalizar<br />compra</button>
                    <button id="borrarCompra">Borrar<br />compra</button>
                </div>
            </div>
        </Link>
    )
}

export default CartWidget
