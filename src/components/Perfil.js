import { collection, doc, getDoc, where } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { coleccionOrdenes } from "./firebase";


const Perfil = ({ infoUsuario, setOrder, setOrderId }) => {
    let navigate = useNavigate()

    const [compra, setCompra] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCompra(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(compra)
        if (compra.trim() !== "") {
            const orden = getDoc(doc(coleccionOrdenes, compra))
                .then((orden) => {
                    if (orden.data()) {
                        setOrder(orden.data())
                        setOrderId(orden.id)
                        setError(false)
                        navigate(`/order/${orden.id}`)
                    } else {
                        setError(true)
                    }
                })
                .catch((error) => {

                })
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <h3>Mis compras</h3>
            <form className='formContainer' onSubmit={handleSubmit} >
                <label htmlFor="compra">Ingresá el código que te dimos al hacer la compra para ver el resumen</label>
                <input type="text" name="compra" onChange={handleChange} />
                <button type="submit">Buscar</button>
                {error && <p className='errorMsj'>Código de compra incorrecto</p>}
            </form>
        </div>

    )
};

export default Perfil;
