import logo from '../assets/img/logotipo.svg'

function NavBar() {
    return (
        <nav className="navBar">
            <a href="#" className="logo">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="" />
            </a>
            <ul>
                <li>productos</li>
                <li>contacto</li>
            </ul>
            <ul id="user">
                <li id="login"><a href="./login.html">Iniciar Sesión</a></li>
                <li id="signin"><a href="./signin.html">Registrarse</a></li>
            </ul>

        </nav>
    )
}

export default NavBar