import { collection, doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import logo from '../assets/img/logotipo.svg'
import { database } from './firebase';

const Login = ({ setInfoUsuario }) => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(database)
        const usersCollection = collection(database, "usuarios")
        console.log(usersCollection)
        console.log(user)
        const userInfo = getDoc(doc(usersCollection, user))
            .then((usuario) => {
                console.log(usuario.data())
                if (usuario.data()) {
                    setInfoUsuario({ user: usuario.id, ...usuario.data() })
                    setError(false)
                } else {
                    setError(true)
                }
            })
    }

    console.log(error)

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
                {error ? <p id="errorMsj">El usuario o contraseña ingresados son incorrectos. ¿No tiene una cuenta? Registrese <a href="./signin.html">acá</a>.</p> : null}
                <button className="formInput logBtn" type='submit'>Iniciar Sesión</button>
            </form>
        </>
    )
};

export default Login;
