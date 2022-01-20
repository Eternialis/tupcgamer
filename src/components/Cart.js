import { useContext } from 'react'
import { context } from './CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const { cartItems, totalPrice, cantidadTotal } = useContext(context)

    const { cartReducer } = useContext(context)

    const handleClick = () => {
        // cartReducer({
        //     item,
        //     cantidad: cantidad,
        //     status: "agregar"
        // })
        // setModal(true)
    }

    return (
        <main className='cartContainer'>
            <h2>Tu carrito:</h2>
            <p>Cantidad de productos comprados: {cantidadTotal} </p>
            <div>
                {!cartItems.length ? <h3>¡Ups, tu carrito está vacío! Comienza a comprar <Link to="/">acá</Link>.</h3> :
                    cartItems.map((item) => {
                        return (
                            <div key={item.id} className='itemCard'>
                                <img src={item.img} alt={item.name} className='itemCard__img' />
                                <div className="itemCard__text">
                                    <h4 className='itemCard__title'>{item.name}</h4>
                                    <p>Precio: $ {item.price}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <button><FontAwesomeIcon icon={faTrashAlt} onClick={handleClick} /></button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <p>Precio total: $ {totalPrice} </p>
        </main>
    )
}

export default Cart
