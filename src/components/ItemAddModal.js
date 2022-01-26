import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ItemAddModal = ({ setItemAddModal }) => {

    const handleClick = () => {
        setItemAddModal(false)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <FontAwesomeIcon icon={faCheckSquare} />
                <h3>¡Producto añadido con éxito!</h3>
                <div className="btnsContainer">
                    <Link to={"/cart"} className="btn terminarBtn" onClick={handleClick}>Terminar mi compra</Link>
                    <Link to={"/"} className="btn seguirBtn" onClick={handleClick}>Seguir comprando</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemAddModal
