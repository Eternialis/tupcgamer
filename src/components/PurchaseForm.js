import { addDoc, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { context } from "./CartContext";
import { coleccionOrdenes } from "./firebase";
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PurchaseForm = ({ infoUsuario, setOrder, setOrderId }) => {
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            nombre: infoUsuario.nombre,
            apellido: infoUsuario.apellido,
            email: infoUsuario.email,
            pais: infoUsuario.pais,
            provincia: infoUsuario.provincia,
            ciudad: infoUsuario.ciudad,
            direccion: infoUsuario.direccion,
            telefono: infoUsuario.telefono
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(2, "El nombre debe tener 2 caracteres o más.")
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, "Ingrese un nombre válido.")
                .required("Obligatorio"),
            apellido: Yup.string()
                .min(2, "El apellido debe tener 2 caracteres o más.")
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, "Ingrese un apellido válido.")
                .required("Obligatorio"),
            email: Yup.string()
                .email("Dirección de mail inválida")
                .required("Obligatorio"),
            pais: Yup.string()
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, "Ingrese un nombre de país válido.")
                .required("Obligatorio"),
            provincia: Yup.string()
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, "Ingrese un nombre de provincia válido.")
                .required("Obligatorio"),
            ciudad: Yup.string()
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, "Ingrese un nombre de ciudad válido.")
                .required("Obligatorio"),
            direccion: Yup.string()
                .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ0-9 ]+$/, "Ingrese una dirección válida.")
                .required("Obligatorio"),
            telefono: Yup.string()
                .matches(/^[0-9-+]+$/, "Ingrese un número de teléfono válido.")
                .required("Obligatorio"),
        }),
        onSubmit: values => {
            const usuario = {
                nombre: values.nombre.trim() + " " + values.apellido.trim(),
                email: values.email.trim(),
                pais: values.pais.trim(),
                provincia: values.pais.trim(),
                ciudad: values.ciudad.trim(),
                direccion: values.direccion.trim(),
                telefono: values.telefono.trim()
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
    })

    const { cartItems, totalPrice, cantidadTotal, cartReducer } = useContext(context)

    return (
        <div className="purchaseFormContainer">
            <h3>¡Los productos casi son tuyos!</h3>
            <h4>Antes de terminar, te pedimos que verifiques tu información para que el producto te llegue correctamente.</h4>
            <form className='formContainer' onSubmit={formik.handleSubmit}>
                <div className='formItem'>
                    <label htmlFor="email" className='formContainer__text'>Email:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("email")} />
                    {formik.touched.email && formik.errors.email ? <p className='errorMsj'>{formik.errors.email}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="nombre" className='formContainer__text'>Nombre:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("nombre")} />
                    {formik.touched.nombre && formik.errors.nombre ? <p className='errorMsj'>{formik.errors.nombre}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="apellido" className='formContainer__text'>Apellido:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("apellido")} />
                    {formik.touched.apellido && formik.errors.apellido ? <p className='errorMsj'>{formik.errors.apellido}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="pais" className='formContainer__text'>Pais de residencia:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("pais")} />
                    {formik.touched.pais && formik.errors.pais ? <p className='errorMsj'>{formik.errors.pais}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="provincia" className='formContainer__text'>Provincia:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("provincia")} />
                    {formik.touched.provincia && formik.errors.provincia ? <p className='errorMsj'>{formik.errors.provincia}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="ciudad" className='formContainer__text'>Ciudad:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("ciudad")} />
                    {formik.touched.ciudad && formik.errors.ciudad ? <p className='errorMsj'>{formik.errors.ciudad}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="direccion" className='formContainer__text'>Dirección:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("direccion")} />
                    {formik.touched.direccion && formik.errors.direccion ? <p className='errorMsj'>{formik.errors.direccion}</p> : null}
                </div>
                <div className='formItem'>
                    <label htmlFor="telefono" className='formContainer__text'>Teléfono:</label>
                    <input className="formInput" type="text" {...formik.getFieldProps("telefono")} />
                    {formik.touched.telefono && formik.errors.telefono ? <p className='errorMsj'>{formik.errors.telefono}</p> : null}
                </div>
                <div>
                    <button type='submit' className='btn submitBtn'>Finalizar compra</button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseForm;
