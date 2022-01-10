import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

let productos = [
    { id: 1, name: "Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake", tag: "Microprocesador", fab: "Intel", price: 400.50, stock: 500, img: "/productos/Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-med.jpg" },
    { id: 2, name: "Gabinete Kolink Void ARGB ATX Vidrio Templado", tag: "Kolink", fab: "Intel", price: 250.50, stock: 240, img: "/productos/Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-med.jpg" },
    { id: 3, name: "Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular", tag: "Fuente", fab: "Intel", price: 970.20, stock: 400, img: "/productos/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-med.jpg" }
];

function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    let { id } = useParams()

    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {

                res(productos)
            }, 2000)
        })

        console.log(typeof id)

        promesa.then((items) => {
            setLoading(false)
            setItem(items.find(item => item.id == id))
        }).catch((err) => console.log(err))

        console.log(item)

    }, [id]);

    return (
        <>
            {loading ? <p className="loading">Cargando...</p> : <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer
