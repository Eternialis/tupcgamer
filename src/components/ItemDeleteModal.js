import { useContext } from "react";
import { context } from "./CartContext";

const ItemDeleteModal = ({ itemToDelete, setItemDeleteModal }) => {

    const { cartReducer } = useContext(context)

    const handleRemove = () => {
        setItemDeleteModal(false)
        if (itemToDelete === "all") {
            cartReducer({
                status: "quitarTodo"
            })
        } else {
            cartReducer({
                item: itemToDelete,
                cantidad: itemToDelete.cantidad,
                status: "quitar"
            })
        }
    }

    const handleDontRemove = () => {
        setItemDeleteModal(false)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{itemToDelete === "all" ? "¿Está seguro de que desea borrar todos los productos?" : "¿Está seguro que desea eliminar este producto?"}</h3>
                <h4>{itemToDelete.name}</h4>
                <div className="btnsContainer">
                    <button className="btn terminarBtn" onClick={handleRemove}>Eliminar</button>
                    <button className="btn seguirBtn" onClick={handleDontRemove}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDeleteModal