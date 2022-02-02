import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logotipo.svg'
import { usersCollection } from './firebase';

const Login = ({ setInfoUsuario }) => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        getDoc(doc(usersCollection, user))
            .then((usuario) => {
                if (usuario.data().pass === pass) {
                    setInfoUsuario({ user: usuario.id, ...usuario.data() })
                    sessionStorage.setItem("user", JSON.stringify({ user: usuario.id, ...usuario.data() }))
                    setError(false)
                    navigate("/")
                } else {
                    setError(true)
                }
            })
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }


    return (
        <>
            <header className="loginHeader">
                <h1>tu pc gamer</h1>
                <img src={logo} alt="tu pc gamer" />
            </header>
            <form className="loginContainer" onSubmit={handleSubmit}>
                <label target="username">usuario</label>
                <input type="text" id="username" name="username" className="formInput" onChange={handleChangeUser} />
                <label target="password">contraseña</label>
                <input type="password" id="password" name="password" className="formInput" onChange={handleChangePass} />
                {error && <p className='errorMsj'>El usuario o contraseña ingresados son incorrectos. ¿No tiene una cuenta? Registrese <a href="./signin.html">acá</a>.</p>}
                <button className="formInput logBtn" type='submit'>Iniciar Sesión</button>
            </form>
        </>
    )
};

export default Login;
