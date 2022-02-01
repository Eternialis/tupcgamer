import logo from '../assets/img/logotipo.svg'
import Carrito from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar({ user, img }) {



    return (
        <nav className="navBar">
            <Link to="/" className="logo">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="tu pc gamer" />
            </Link>
            <ul className="links">
                <Link to="/" >
                    <li>productos</li>
                </Link>
                <li><Link to={"/mi-perfil"}>Mi perfil</Link></li>
                <li id="vistaEdicion"><Link to="/vistaEdicion">vista Edición</Link></li>
                <li id="logout">Cerrar sesión</li>
            </ul>
            {!user ? <div id='nouser'>
                <Link to="/login" id="login">Iniciar Sesión</Link>
                <Link to="/signin" id="signin">Registrarse</Link>
            </div> :
                <div id="user">
                    <Carrito />
                    <div id="profile">
                        <p>{user}</p>
                        <img src={img} alt="" className="img" />
                    </div>
                </div>}
        </nav>
    )
}

export default NavBar