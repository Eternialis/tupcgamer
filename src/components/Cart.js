import { useContext } from 'react'
import { context } from './CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ setItemDeleteModal, setItemToDelete }) => {

    const { cartItems, totalPrice, cantidadTotal } = useContext(context)

    const handleRemove = (item) => {
        setItemToDelete(item)
        setItemDeleteModal(true)
    }

    const handleRemoveAll = () => {
        setItemToDelete("all")
        setItemDeleteModal(true)
    }

    return (
        <main className='cartContainer'>
            <h2>Tu carrito:</h2>
            {cartItems.length > 0 ?
                <div>
                    <button onClick={() => handleRemoveAll()} >Vaciar carrito</button>
                    <p>Cantidad de productos comprados: {cantidadTotal} </p>
                </div> : null}
            <div>
                {!cartItems.length ? <h3>¡Ups, tu carrito está vacío! Comenzá a comprar <Link to="/">acá</Link>.</h3> :
                    cartItems.map((item) => {
                        return (
                            <div key={item.id} className='itemCard'>
                                <img src={item.img} alt={item.name} className='itemCard__img' />
                                <div className="itemCard__text">
                                    <Link to={`/item/${item.id}`} className='itemCard__title'>{item.name}</Link>
                                    <p>Precio: $ {item.price}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <button onClick={() => handleRemove(item)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            {cartItems.length > 0 ?
                <div>
                    <p>Precio total: $ {totalPrice} </p>
                    <Link to={`/purchase`}>Confirmar compra</Link>
                </div> : null}
        </main>
    )
}

export default Cart
