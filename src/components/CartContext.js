import { createContext, useReducer } from "react";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    cantidad: 0
}

const reducer = (state, action) => {
    const { item, cantidad, status } = action

    switch (status) {
        case "agregar":
            return {
                cartItems: [...state.cartItems, item],
                totalPrice: (state.totalPrice + item.price * cantidad).toFixed(2),
                cantidad: state.cantidad + cantidad
            }
        case "quitar":
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