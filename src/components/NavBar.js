import logo from '../assets/img/logotipo.svg'
import Carrito from './CartWidget'

function NavBar({ username, img }) {
    return (
        <nav className="navBar">
            <a href="/#" className="logo">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="" />
            </a>
            <ul className="links">
                <li>productos</li>
                <li>contacto</li>
                <li id="vistaEdicion"><a href="./vistaEdicion.html">vista Edición</a></li>
                <li id="logout">Cerrar sesión</li>
            </ul>
            <div id="user">
                <a href="./login.html" id="login">Iniciar Sesión</a>
                <a href="./signin.html" id="signin">Registrarse</a>
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