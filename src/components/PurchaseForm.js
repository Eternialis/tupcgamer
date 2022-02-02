import { addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useEffect, useReducer, useState } from "react";
import { context } from "./CartContext";
import { coleccionOrdenes, database } from "./firebase";
import { useNavigate } from "react-router-dom"

const reducer = (state, action) => {
    const { name, value } = action
    return {
        ...state,
        [name]: String(value)
    }
}

const PurchaseForm = ({ infoUsuario, setOrder, setOrderId }) => {
    let navigate = useNavigate()

    const initialState = {
        nombre: infoUsuario.nombre,
        apellido: infoUsuario.apellido,
        email: infoUsuario.email,
        pais: infoUsuario.pais,
        provincia: infoUsuario.provincia,
        ciudad: infoUsuario.ciudad,
        direccion: infoUsuario.direccion,
        telefono: infoUsuario.telefono
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const { nombre, apellido, email, pais, provincia, ciudad, direccion, telefono } = state

    //Validaciones
    const [emailVal, setEmailVal] = useState(true);
    const [nombreVal, setNombreVal] = useState(true);
    const [apellidoVal, setApellidoVal] = useState(true);
    const [paisVal, setPaisVal] = useState(true);
    const [provinciaVal, setProvinciaVal] = useState(true);
    const [ciudadVal, setCiudadVal] = useState(true);
    const [direccionVal, setDireccionVal] = useState(true);
    const [telefonoVal, setTelefonoVal] = useState(true);
    const validations = [emailVal, nombreVal, apellidoVal, paisVal, provinciaVal, ciudadVal, direccionVal, telefonoVal]

    useEffect(() => {
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

    const { cartItems, totalPrice, cantidadTotal, cartReducer } = useContext(context)

    const handleSubmit = (e) => {
        e.preventDefault()


        if (!validations.some(val => val === false)) {
            const usuario = {
                nombre: nombre.trim() + " " + apellido.trim(),
                email: email.trim(),
                pais: pais.trim(),
                provincia: pais.trim(),
                ciudad: ciudad.trim(),
                direccion: direccion.trim(),
                telefono: telefono.trim()
            }
            const compra = {
                usuario,
                cartItems,
                totalPrice,
                cantidadTotal,
                created_at: serverTimestamp()
            }
            setOrder(compra)
            const orden = addDoc(coleccionOrdenes, compra)
            orden
                .then((resultado) => {
                    cartReducer({
                        status: "quitarTodo"
                    })
                    setOrderId(resultado.id)
                    navigate(`/order/${resultado.id}`)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    return (
        <main>
            <h3>¡Los productos casi son tuyos!</h3>
            <h4>Antes de terminar, te pedimos que verifiques tu información para que el producto te llegue correctamente.</h4>
            <form className='formContainer' onSubmit={handleSubmit}>
                <div className='formItem'>
                    <label htmlFor="email" className='formContainer__text'>Email:</label>
                    <input type="text" name="email" className="formInput" value={email} onChange={handleChange} />
                    {emailVal || <p className='errorMsj'>Ingrese un email válido.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="nombre" className='formContainer__text'>Nombre:</label>
                    <input type="text" name="nombre" className="formInput" value={nombre} onChange={handleChange} />
                    {nombreVal || <p className='errorMsj'>Ingrese un nombre válido.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="apellido" className='formContainer__text'>Apellido:</label>
                    <input type="text" name="apellido" className="formInput" value={apellido} onChange={handleChange} />
                    {apellidoVal || <p className='errorMsj'>Ingrese un apellido válido.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="pais" className='formContainer__text'>Pais de residencia:</label>
                    <input type="text" name="pais" className="formInput" value={pais} onChange={handleChange} />
                    {paisVal || <p className='errorMsj'>Ingrese un nombre de país válido.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="provincia" className='formContainer__text'>Provincia:</label>
                    <input type="text" name="provincia" className="formInput" value={provincia} onChange={handleChange} />
                    {provinciaVal || <p className='errorMsj'>Ingrese un nombre de provincia válida.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="ciudad" className='formContainer__text'>Ciudad:</label>
                    <input type="text" name="ciudad" className="formInput" value={ciudad} onChange={handleChange} />
                    {ciudadVal || <p className='errorMsj'>Ingrese un nombre de ciudad válida.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="direccion" className='formContainer__text'>Dirección:</label>
                    <input type="text" name="direccion" className="formInput" value={direccion} onChange={handleChange} />
                    {direccionVal || <p className='errorMsj'>Ingrese una dirección válida.</p>}
                </div>
                <div className='formItem'>
                    <label htmlFor="telefono" className='formContainer__text'>Teléfono:</label>
                    <input type="text" name="telefono" className="formInput" value={telefono} onChange={handleChange} />
                    {telefonoVal || <p className='errorMsj'>Ingrese un número de teléfono sin espacios.</p>}
                </div>
                <div>
                    <button type='formInput logBtn' className='btn'>Confirmar compra</button>
                </div>
            </form>

        </main>
    );
};

export default PurchaseForm;
