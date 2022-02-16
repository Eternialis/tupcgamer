import { Link } from "react-router-dom";

const Order = ({ order, orderId }) => {

    console.log(order)
    console.log(orderId)
    console.log(order.cartItems)

    return (
        <div className="orderContainer">
            <h2>Esta es tu orden de compra, {order.usuario.nombre}:</h2>
            <p>Código de compra: <span className="orden">{orderId ? orderId : ""}</span> (copiá el código si querés conservarlo como comprobante.)</p>
            <h3>Datos de envío</h3>
            <p>Dirección del envío: {order.usuario.direccion}</p>
            <p>Teléfono: {order.usuario.telefono}</p>
            <h3>Productos comprados</h3>
            <div>
                {order.cartItems.map((item) => (
                    <div className="orderContainer__item" key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Precio unitario: $ {item.price}</p>
                        <p>Cantidad : {item.cantidad}</p>
                    </div>
                ))}
            </div>
            <h3 className="valorCompra">Valor de la compra: $ {order.totalPrice}</h3>
            <Link className="submitBtn" to={"/"}>Volver a la página principal</Link>
        </div>
    )
};

export default Order;
