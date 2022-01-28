import { faCheckSquare, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ItemAddModal = ({ setItemAddModal, user }) => {

    const handleClick = () => {
        setItemAddModal(false)
    }

    return (
        <div className="modal">
            {user ?
                <div className="modal-content">
                    <FontAwesomeIcon icon={faCheckSquare} />
                    <h3>¡Producto añadido con éxito!</h3>
                    <div className="btnsContainer">
                        <Link to={"/cart"} className="btn terminarBtn" onClick={handleClick}>Terminar mi compra</Link>
                        <Link to={"/"} className="btn seguirBtn" onClick={handleClick}>Seguir comprando</Link>
                    </div>
                </div> :
                <div className="modal-content">
                    <FontAwesomeIcon icon={faCommentDots} />
                    <h3>Debe tener una cuenta para poder comprar en nuestro sitio.</h3>
                    <div className="btnsContainer">
                        <Link to={"/login"} className="btn terminarBtn" onClick={handleClick}>Iniciar Sesión</Link>
                        <Link to={"/signin"} className="btn seguirBtn" onClick={handleClick}>Registrarme</Link>
                    </div>
                </div>}
        </div>
    )
}

export default ItemAddModal
