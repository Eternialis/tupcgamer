import { createContext, useEffect, useReducer } from "react";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    cantidadTotal: 0
}

const reducer = (state, action) => {
    const { item, cantidad, status } = action
    let newCart = {}

    switch (status) {
        case "agregar":
            const index = state.cartItems.findIndex((oldItem) => oldItem.id === item.id)
            const newItem = (({ id, name, price, img }) => ({ id, name, price, img, cantidad }))(item)
            newCart = {
                cartItems: index === -1 ? [...state.cartItems, newItem] : [...state.cartItems.filter(item => item.id !== newItem.id), state.cartItems[index] = { ...state.cartItems[index], cantidad: state.cartItems[index].cantidad + cantidad }],
                totalPrice: Number((state.totalPrice + item.price * cantidad).toFixed(2)),
                cantidadTotal: state.cantidadTotal + cantidad
            }
            sessionStorage.setItem("carrito", JSON.stringify(newCart))
            return newCart
        case "quitar":
            newCart = {
                cartItems: state.cartItems.filter((i) => i.id !== item.id),
                totalPrice: Number((state.totalPrice - item.price * cantidad).toFixed(2)),
                cantidadTotal: state.cantidadTotal - cantidad
            }
            sessionStorage.setItem("carrito", JSON.stringify(newCart))
            return newCart
        case "restaurarCarrito":
            return item
        case "quitarTodo":
            sessionStorage.removeItem("carrito")
            return initialState
    }
}


export const context = createContext()
const { Provider } = context

const CartContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function cartReducer(obj) {
        dispatch(obj)
    }

    const contextValue = {
        ...state,
        cartReducer
    }

    useEffect(() => {
        const carritoEnSession = JSON.parse(sessionStorage.getItem("carrito"))
        carritoEnSession && cartReducer({ item: carritoEnSession, status: "restaurarCarrito" })
    }, []);


    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext