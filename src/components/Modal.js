import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Modal = ({ setModal }) => {

    const handleClick = () => {
        setModal(false)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <FontAwesomeIcon icon={faCheckSquare} />
                <h3>¡Producto añadido con éxito!</h3>
                <div className="btnsContainer">
                    <Link to={"/cart"} className="terminarBtn" onClick={handleClick}>Terminar mi compra</Link>
                    <Link to={"/"} className="seguirBtn" onClick={handleClick}>Seguir comprando</Link>
                </div>
            </div>
        </div>
    )
}

export default Modal
