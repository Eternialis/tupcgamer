import { doc, setDoc } from 'firebase/firestore';
import { useReducer, useState } from 'react';
import DatePicker from 'react-date-picker'
import { database } from './firebase';
import { useNavigate } from "react-router-dom"

const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    pass: "",
    fechaNacimiento: "",
    pais: "",
    provincia: "",
    ciudad: "",
    direccion: "",
    telefono: ""
}

const reducer = (state, action) => {
    const { name, value } = action
    console.log(name)
    console.log(value)
    return {
        ...state,
        [name]: value
    }
}

const Signin = () => {
    let navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, initialState);

    const [date, setDate] = useState(new Date());

    //Validaciones
    const [error, setError] = useState(false);
    const [usuario, setUsuario] = useState(true);
    const [pass, setPass] = useState(true);
    const [passCheck, setPassCheck] = useState(true);
    const [email, setEmail] = useState(true);
    const [nombre, setNombre] = useState(true);
    const [apellido, setApellido] = useState(true);
    const [pais, setPais] = useState(true);
    const [provincia, setProvincia] = useState(true);
    const [ciudad, setCiudad] = useState(true);
    const [direccion, setDireccion] = useState(true);
    const [telefono, setTelefono] = useState(true);

    console.log(state)

    const handleChange = (e) => {
        const { value, name } = e.target
        dispatch({ name, value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ fechaNacimiento: date })
        if (!/[a-zA-Z0-9]{3,18}$/.test(state.usuario)) {
            setUsuario(false)
            setError(true)
        } else {
            setUsuario(true)
            setError(false)
        }
        if (!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(state.pass)) {
            setPass(false)
            setError(true)
        } else {
            setPass(true)
            setError(false)
        }
        if (state.pass !== state.passCheck) {
            setPassCheck(false)
            setError(true)
        } else {
            setPassCheck(true)
            setError(false)
        }
        if (!/[a-zA-Z]$/.test(state.nombre)) {
            setNombre(false)
            setError(true)
        } else {
            setNombre(true)
            setError(false)
        }
        if (!/[a-zA-Z]$/.test(state.apellido)) {
            setApellido(false)
            setError(true)
        } else {
            setApellido(true)
            setError(false)
        }
        if (!/[a-zA-Z]$/.test(state.pais)) {
            setPais(false)
            setError(true)
        } else {
            setPais(true)
            setError(false)
        }
        if (!/[a-zA-Z]$/.test(state.provincia)) {
            setProvincia(false)
            setError(true)
        } else {
            setProvincia(true)
            setError(false)
        }
        if (!/[a-zA-Z]$/.test(state.ciudad)) {
            setCiudad(false)
            setError(true)
        } else {
            setCiudad(true)
            setError(false)
        }
        error || setDoc(doc(database, "usuarios", state.usuario), state)
        navigate("/login")
    }

    return (
        <>
            <div className="formSignin">
                <form className='formContainer' onSubmit={handleSubmit}>
                    <div className='formItem'>
                        <label htmlFor="usuario" className='formContainer__text'>Nombre de usuario:</label>
                        <input type="text" name="usuario" className="formInput" onChange={handleChange} />
                        {usuario || <p className='errorMsj'>El nombre de usuario debe poseer entre 8 y 15 caracteres alfanuméricos.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="pass" className='formContainer__text'>Contraseña:</label>
                        <input type="password" name="pass" className="formInput" onChange={handleChange} />
                        {pass || <p className='errorMsj'>La contraseña debe tener un mínimo de 8 caracteres y poseer al menos un número, una letra mayúscula y una minúscula.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="passConf" className='formContainer__text'>Confirmar contraseña:</label>
                        <input type="password" name="passConf" className="formInput" onChange={handleChange} />
                        {passCheck || <p className='errorMsj'>La contraseña y su confirmación deben coincidir.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="email" className='formContainer__text'>Nombre:</label>
                        <input type="text" name="email" className="formInput" onChange={handleChange} />
                        {email || <p className='errorMsj'>Ingrese un email válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="nombre" className='formContainer__text'>Nombre:</label>
                        <input type="text" name="nombre" className="formInput" onChange={handleChange} />
                        {nombre || <p className='errorMsj'>Ingrese un nombre válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="apellido" className='formContainer__text'>Apellido:</label>
                        <input type="text" name="apellido" className="formInput" onChange={handleChange} />
                        {apellido || <p className='errorMsj'>Ingrese un apellido válido.</p>}
                    </div>
                    <div className='formItem fecha'>
                        <p className='formContainer__text'>Fecha de nacimiento:</p>
                        <DatePicker onChange={setDate} value={date} />
                    </div>
                    <h3>Los siguientes datos se solicitan para enviarle nuestros productos, pero puede ser completado más adelante.</h3>
                    <div className='formItem'>
                        <label htmlFor="pais" className='formContainer__text'>Pais de residencia:</label>
                        <input type="text" name="pais" className="formInput" onChange={handleChange} />
                        {pais || <p className='errorMsj'>Ingrese un nombre de país válido.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="provincia" className='formContainer__text'>Provincia:</label>
                        <input type="text" name="provincia" className="formInput" onChange={handleChange} />
                        {provincia || <p className='errorMsj'>Ingrese un nombre de provincia válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="ciudad" className='formContainer__text'>Ciudad:</label>
                        <input type="text" name="ciudad" className="formInput" onChange={handleChange} />
                        {ciudad || <p className='errorMsj'>Ingrese un nombre de ciudad válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="direccion" className='formContainer__text'>Dirección:</label>
                        <input type="text" name="direccion" className="formInput" onChange={handleChange} />
                        {direccion || <p className='errorMsj'>Ingrese una dirección válida.</p>}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="telefono" className='formContainer__text'>Teléfono:</label>
                        <input type="text" name="telefono" className="formInput" onChange={handleChange} />
                        {telefono || <p className='errorMsj'>Ingrese un número de teléfono válido.</p>}
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
