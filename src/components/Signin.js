import { doc, setDoc } from 'firebase/firestore';
import { useEffect, useReducer, useState } from 'react';
import DatePicker from 'react-date-picker'
import { database } from './firebase';
import { useNavigate } from "react-router-dom"

const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    pass: "",
    passCheck: "",
    fechaNacimiento: "",
    pais: "",
    provincia: "",
    ciudad: "",
    direccion: "",
    telefono: ""
}

const reducer = (state, action) => {
    const { name, value } = action
    return {
        ...state,
        [name]: String(value)
    }
}

const Signin = () => {
    let navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, initialState);

    const [date, setDate] = useState(new Date());

    const { usuario, pass, passCheck, nombre, apellido, email, pais, provincia, ciudad, direccion, telefono } = state

    const [usuarioVal, setUsuarioVal] = useState(true);
    const [passVal, setPassVal] = useState(true);
    const [passCheckVal, setPassCheckVal] = useState(true);
    const [emailVal, setEmailVal] = useState(true);
    const [nombreVal, setNombreVal] = useState(true);
    const [apellidoVal, setApellidoVal] = useState(true);
    const [paisVal, setPaisVal] = useState(true);
    const [provinciaVal, setProvinciaVal] = useState(true);
    const [ciudadVal, setCiudadVal] = useState(true);
    const [direccionVal, setDireccionVal] = useState(true);
    const [telefonoVal, setTelefonoVal] = useState(true);
    const validations = [usuarioVal, passVal, passCheckVal, emailVal, nombreVal, apellidoVal, paisVal, provinciaVal, ciudadVal, direccionVal, telefonoVal]

    useEffect(() => {
        setUsuarioVal(/[a-zA-Z0-9]{3,18}$/.test(usuario.trim()))
        setPassVal(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(pass.trim()))
        setPassCheckVal(pass === passCheck)
        setEmailVal(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim()))
        setNombreVal(/[a-zA-Z ]$/.test(nombre))
        setApellidoVal(/[a-zA-Z ]$/.test(apellido))
        setPaisVal(/[a-zA-Z ]$/.test(pais))
        setProvinciaVal(/[a-zA-Z ]$/.test(provincia))
        setCiudadVal(/[a-zA-Z ]$/.test(ciudad))
        setDireccionVal(/[a-zA-Z0-9 ]$/.test(direccion))
        setTelefonoVal(/[0-9-+]$/.test(telefono.trim()))
    }, [state]);

    const handleChange = (e) => {
        const { value, name } = e.target
        dispatch({ name, value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validations.some(val => val === false)) {
            setDoc(doc(database, "usuarios", state.usuario), state)
            navigate("/login")
        }
    }

    return (
        <>
            <div className="formSignin">
                <form className='formContainer' onSubmit={handleSubmit}>
                    <div className='formItem'>
                        <label htmlFor="usuario" className='formContainer__text'>Nombre de usuario:</label>
                        <input type="text" name="usuario" className="formInput" onChange={handleChange} />
                        {usuarioVal || <p className='errorMsj'>El nombre de usuario debe poseer entre 8 y 15 caracteres alfanuméricos.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="pass" className='formContainer__text'>Contraseña:</label>
                        <input type="password" name="pass" className="formInput" onChange={handleChange} />
                        {passVal || <p className='errorMsj'>La contraseña debe tener un mínimo de 8 caracteres y poseer al menos un número, una letra mayúscula y una minúscula.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="passCheck" className='formContainer__text'>Confirmar contraseña:</label>
                        <input type="password" name="passCheck" className="formInput" onChange={handleChange} />
                        {passCheckVal || <p className='errorMsj'>La contraseña y su confirmación deben coincidir.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="email" className='formContainer__text'>Email:</label>
                        <input type="text" name="email" className="formInput" onChange={handleChange} />
                        {emailVal || <p className='errorMsj'>Ingrese un email válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="nombre" className='formContainer__text'>Nombre:</label>
                        <input type="text" name="nombre" className="formInput" onChange={handleChange} />
                        {nombreVal || <p className='errorMsj'>Ingrese un nombre válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="apellido" className='formContainer__text'>Apellido:</label>
                        <input type="text" name="apellido" className="formInput" onChange={handleChange} />
                        {apellidoVal || <p className='errorMsj'>Ingrese un apellido válido.</p>}
                    </div>
                    <div className='formItem fecha'>
                        <p className='formContainer__text'>Fecha de nacimiento:</p>
                        <DatePicker onChange={setDate} value={date} />
                    </div>
                    <h3>Los siguientes datos se solicitan para enviarle nuestros productos, pero puede ser completado más adelante.</h3>
                    <div className='formItem'>
                        <label htmlFor="pais" className='formContainer__text'>Pais de residencia:</label>
                        <input type="text" name="pais" className="formInput" onChange={handleChange} />
                        {paisVal || <p className='errorMsj'>Ingrese un nombre de país válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="provincia" className='formContainer__text'>Provincia:</label>
                        <input type="text" name="provincia" className="formInput" onChange={handleChange} />
                        {provinciaVal || <p className='errorMsj'>Ingrese un nombre de provincia válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="ciudad" className='formContainer__text'>Ciudad:</label>
                        <input type="text" name="ciudad" className="formInput" onChange={handleChange} />
                        {ciudadVal || <p className='errorMsj'>Ingrese un nombre de ciudad válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="direccion" className='formContainer__text'>Dirección:</label>
                        <input type="text" name="direccion" className="formInput" onChange={handleChange} />
                        {direccionVal || <p className='errorMsj'>Ingrese una dirección válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="telefono" className='formContainer__text'>Teléfono:</label>
                        <input type="text" name="telefono" className="formInput" onChange={handleChange} />
                        {telefonoVal || <p className='errorMsj'>Ingrese un número de teléfono válido.</p>}
                    </div>
                    <div>
                        <button type='formInput logBtn' className='btn'>Registrarse</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Signin;
