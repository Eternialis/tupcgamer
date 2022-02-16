import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import DatePicker from 'react-date-picker'
import { database } from './firebase';
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
    let navigate = useNavigate()

    const [date, setDate] = useState(new Date());

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            usuario: "",
            pass: "",
            passCheck: "",
            fechaNacimiento: new Date(),
            pais: "",
            provincia: "",
            ciudad: "",
            direccion: "",
            telefono: ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(2, "El nombre debe tener 2 caracteres o más.")
                .required("Obligatorio"),
            apellido: Yup.string()
                .min(2, "El apellido debe tener 2 caracteres o más.")
                .required("Obligatorio"),
            email: Yup.string()
                .email("Dirección de mail inválida")
                .required("Obligatorio"),
            usuario: Yup.string()
                .min(8, "El nombre de usuario debe poseer entre 8 y 15 caracteres alfanuméricos.")
                .max(15, "El nombre de usuario debe poseer entre 8 y 15 caracteres alfanuméricos.")
                .matches(/[a-zA-Z0-9]$/, "El nombre de usuario debe poseer entre 8 y 15 caracteres alfanuméricos.")
                .required("Obligatorio"),
            pass: Yup.string()
                .matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/, "La contraseña debe tener un mínimo de 8 caracteres y poseer al menos un número, un caracter especial, una letra mayúscula y una minúscula."),
            passCheck: Yup.string()
                .test("pass-igual",
                    () => "La contraseña y su confirmación deben coincidir.",
                    (value) => value == null || value === formik.values.pass)
                .required("Obligatorio"),
            fechaNacimiento: Yup.date(),
            pais: Yup.string()
                .optional()
                .matches(/[a-zA-Z ]$/, "Ingrese un nombre de país válido."),
            provincia: Yup.string()
                .optional()
                .matches(/[a-zA-Z ]$/, "Ingrese un nombre de provincia válido."),
            ciudad: Yup.string()
                .optional()
                .matches(/[a-zA-Z ]$/, "Ingrese un nombre de ciudad válido."),
            direccion: Yup.string()
                .optional()
                .matches(/[a-zA-Z0-9 ]$/, "Ingrese una dirección válida."),
            telefono: Yup.string()
                .matches(/[0-9-+]$/, "Ingrese un número de teléfono válido.")
                .optional(),
        }),
        onSubmit: values => {
            setDoc(doc(database, "usuarios", values.usuario), values)
            navigate("/login")
        }
    })

    formik.values.fechaNacimiento = date

    return (
        <>
            <div className="formSignin">
                <form className='formContainer' onSubmit={formik.handleSubmit}>
                    <div className='formItem'>
                        <label htmlFor="usuario" className='formContainer__text'>Nombre de usuario:</label>
                        <input type="text" {...formik.getFieldProps("usuario")} />
                        {formik.touched.usuario && formik.errors.usuario ? <p className='errorMsj'>{formik.errors.usuario}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="pass" className='formContainer__text'>Contraseña:</label>
                        <input type="password" {...formik.getFieldProps("pass")} />
                        {formik.touched.pass && formik.errors.pass ? <p className='errorMsj'>{formik.errors.pass}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="passCheck" className='formContainer__text'>Confirmar contraseña:</label>
                        <input type="password" {...formik.getFieldProps("passCheck")} />
                        {formik.touched.passCheck && formik.errors.passCheck ? <p className='errorMsj'>{formik.errors.passCheck}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="email" className='formContainer__text'>Email:</label>
                        <input type="text" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email ? <p className='errorMsj'>{formik.errors.email}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="nombre" className='formContainer__text'>Nombre:</label>
                        <input type="text" {...formik.getFieldProps("nombre")} />
                        {formik.touched.nombre && formik.errors.nombre ? <p className='errorMsj'>{formik.errors.nombre}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="apellido" className='formContainer__text'>Apellido:</label>
                        <input type="text" {...formik.getFieldProps("apellido")} />
                        {formik.touched.apellido && formik.errors.apellido ? <p className='errorMsj'>{formik.errors.apellido}</p> : null}
                    </div>
                    <div className='formDate'>
                        <p className='formContainer__text'>Fecha de nacimiento:</p>
                        <DatePicker onChange={setDate} value={date} />
                    </div>
                    <h3>Los siguientes datos se solicitan para enviarle nuestros productos, pero puede ser completado más adelante.</h3>
                    <div className='formItem'>
                        <label htmlFor="pais" className='formContainer__text'>Pais de residencia:</label>
                        <input type="text" {...formik.getFieldProps("pais")} />
                        {formik.touched.pais && formik.errors.pais ? <p className='errorMsj'>{formik.errors.pais}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="provincia" className='formContainer__text'>Provincia:</label>
                        <input type="text" {...formik.getFieldProps("provincia")} />
                        {formik.touched.provincia && formik.errors.provincia ? <p className='errorMsj'>{formik.errors.provincia}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="ciudad" className='formContainer__text'>Ciudad:</label>
                        <input type="text" {...formik.getFieldProps("ciudad")} />
                        {formik.touched.ciudad && formik.errors.ciudad ? <p className='errorMsj'>{formik.errors.ciudad}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="direccion" className='formContainer__text'>Dirección:</label>
                        <input type="text" {...formik.getFieldProps("direccion")} />
                        {formik.touched.direccion && formik.errors.direccion ? <p className='errorMsj'>{formik.errors.direccion}</p> : null}
                    </div>
                    <div className='formItem'>
                        <label htmlFor="telefono" className='formContainer__text'>Teléfono:</label>
                        <input type="text" {...formik.getFieldProps("telefono")} />
                        {formik.touched.telefono && formik.errors.telefono ? <p className='errorMsj'>{formik.errors.telefono}</p> : null}
                    </div>
                    <div>
                        <button type='submit' className='btn submitBtn'>Registrarse</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Signin;
