import { useContext } from 'react'
import { context } from './CartContext'

const Cart = () => {

    const { cartItems, totalPrice, cantidad } = useContext(context)

    console.log(cartItems)

    return (
        <div>
            Hola soy el Cart
            <p>Cantidad de items totales: {cantidad} </p>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            <p>Precio total: ${totalPrice} </p>
        </div>
    )
}

export default Cart
