import { Link } from "react-router-dom";

const Order = ({ order, orderId }) => {

    console.log(order)
    console.log(orderId)
    console.log(order.cartItems)

    return (
        <div>
            <h2>Esta es tu orden de compra, {order.usuario.nombre}:</h2>
            <p>Código de compra: {orderId ? orderId : ""} (copiá el código si querés conservarlo como comprobante.)</p>
            <h3>Datos de envío</h3>
            <p>Dirección del envío: {order.usuario.direccion}</p>
            <p>Teléfono: {order.usuario.telefono}</p>
            <h3>Productos comprados</h3>
            <div>
                {order.cartItems.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Precio unitario: $ {item.price}</p>
                        <p>Cantidad : {item.cantidad}</p>
                    </div>
                ))}
            </div>
            <h3>Valor de la compra: $ {order.totalPrice}</h3>
            <Link to={"/"}>Volver a la página principal</Link>
        </div>
    )
};

export default Order;
