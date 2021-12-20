import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <div id="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <p id="cantidadProductos">3</p>
            <div id="list">
                <ul>

                </ul>
                <div>
                    <button id="finalizarCompra">Finalizar<br />compra</button>
                    <button id="borrarCompra">Borrar<br />compra</button>
                </div>
            </div>
        </div>
    )
}

export default CartWidget
