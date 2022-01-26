import { createContext, useReducer } from "react";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    cantidadTotal: 0
}

const reducer = (state, action) => {
    const { item, cantidad, status } = action

    switch (status) {
        case "agregar":
            const index = state.cartItems.findIndex((oldItem) => oldItem.id === item.id)
            const newItem = (({ id, name, price, img }) => ({ id, name, price, img, cantidad }))(item)

            console.log(newItem)

            return {
                cartItems: index === -1 ? [...state.cartItems, newItem] : [...state.cartItems.filter(item => item.id !== newItem.id), state.cartItems[index] = { ...state.cartItems[index], cantidad: state.cartItems[index].cantidad + cantidad }],
                //cartItems: index === -1 ? [...state.cartItems, newItem] : state.cartItems.map((cartItem) => cartItem.id === newItem.id ? {...cartItem, cartItem.cantidad: cartItem.cantidad + newItem.cantidad} : cartItem),
                totalPrice: Number((state.totalPrice + item.price * cantidad).toFixed(2)),
                cantidadTotal: state.cantidadTotal + cantidad
            }
        case "quitar":
            return {
                cartItems: state.cartItems.filter((i) => i.id !== item.id),
                totalPrice: Number((state.totalPrice - item.price * cantidad).toFixed(2)),
                cantidadTotal: state.cantidadTotal - cantidad
            }
        case "quitarTodo":
            return initialState
    }
}


export const context = createContext()
const { Provider } = context

const CartContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // PARA PENSAR: al use reducer le tengo que mandar algo que le indique si tiene que agregar o quitar elementos del carrito
    // de acuerdo al tipo del objeto, tiene que pushear o splicear un objeto (cartItem) o sumar o restar en cuanto a las cantidades y el precio
    // Para eso agregué el status, que permitiría saber si el objeto enviado se está sumando o restando
    // hay que averiguar si se puede mandar directamente el objeto a const reducer para que haga él el resto


    function cartReducer(obj) {
        dispatch(obj)
    }

    const contextValue = {
        ...state,
        cartReducer
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext