import logo from '../assets/img/logotipo.svg'
import Carrito from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar({ username, img }) {



    return (
        <nav className="navBar">
            <Link to="/" className="logo">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="" />
            </Link>
            <ul className="links">
                <li>productos</li>
                <li>contacto</li>
                <li id="vistaEdicion"><Link to="/vistaEdicion">vista Edición</Link></li>
                <li id="logout">Cerrar sesión</li>
            </ul>
            <div id="user">
                <Link to="/login" id="login">Iniciar Sesión</Link>
                <Link to="/signin" id="signin">Registrarse</Link>
                <Carrito />
                <div id="profile">
                    <p>{username}</p>
                    <img src={img} alt="" className="img" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar