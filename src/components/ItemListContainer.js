import ItemList from "./ItemList"
import { useEffect, useState } from "react"

let productos = [
    { id: 1, name: "Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake", tag: "Microprocesador", fab: "Intel", price: 400.50, stock: 500, img: "/productos/Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-med.jpg" },
    { id: 2, name: "Gabinete Kolink Void ARGB ATX Vidrio Templado", tag: "Gabinete", fab: "Kolink", price: 64.50, stock: 1200, img: "/productos/Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-med.jpg" },
    { id: 3, name: "Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular", tag: "Fuente", fab: "Asus", price: 500, stock: 500, img: "/productos/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-med.jpg" },
    { id: 4, name: "Fuente ASUS TUF 650B 80 Plus Bronze 650W", tag: "Fuente", fab: "Asus", price: 122, stock: 400, img: "/productos/Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W_a7934d75-grn.jpg" },
    { id: 5, name: "Gabinete Gamemax H601 BR Black & Red M-ATX FAN 1 x 120mm", tag: "Gabinete", fab: "Gamemax", price: 35, stock: 1500, img: "/productos/Gabinete_Gamemax_H601_BR_Black___Red_M-ATX_FAN_1_x_120mm_16fab6af-grn.jpg" },
    { id: 6, name: "Procesador Intel Core i5 9400 4.1GHz Turbo 1151 9th Gen", tag: "Microprocesador", fab: "Intel", price: 327.38, stock: 3600, img: "/productos/Procesador_Intel_Core_i5_9400_4.1GHz_Turbo_1151_9th_Gen_fd1d0512-grn.jpg" },
    { id: 7, name: "Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler", tag: "Microprocesador", fab: "AMD", price: 299.99, stock: 4200, img: "/productos/Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-med.jpg" },
];

function ItemListContainer({ filter, loading, setLoading }) {

    const [items, setItems] = useState([])


    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {

                res(productos)
            }, 2000)
        })

        promesa.then((items) => {
            setLoading(false)
            setItems(items.filter((item) => {
                if (filter === "Mostrar Todo") {
                    return true
                } else {
                    return item.tag === filter
                }
            }))
        })

    }, [filter])

    return (

        <ItemList items={items} loading={loading} filter={filter} />
    )
}

export default ItemListContainer
