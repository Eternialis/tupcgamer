import logo from '../assets/img/logotipo.svg'
import Carrito from './CartWidget'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function NavBar({ user, img, setInfoUsuario, setSearch, search }) {

    const handleClick = () => {
        setInfoUsuario({})
        sessionStorage.clear("user")
    }



    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <nav className="navBar">
            <Link to="/" className="logo">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="tu pc gamer" />
            </Link>
            <ul className="links">
                <li><Link to="/" >productos</Link></li>
                {user ?
                    <>
                        <li><Link to={"/mi-perfil"}>Mi perfil</Link></li>
                        <li id="logout" onClick={handleClick}>Cerrar sesión</li>
                    </>
                    : null}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Buscar...' value={search} onChange={handleChange} />
            </form>
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