import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { itemCollection } from "./firebase";
import { addDoc, getDocs, query, where } from "firebase/firestore";

function ItemListContainer({ filter, loading, setLoading }) {

    const [items, setItems] = useState([])


    useEffect(() => {
        // Funcion usada para agregar todos los productos del array de productos a la base de datos
        //productos.forEach(item => addDoc(itemCollection, item))

        const filtroTag = filter !== "Mostrar Todo" ? where("tag", "==", filter) : undefined
        const filtroPrice = filter !== "Mostrar Todo" ? where("price", "", filter) : undefined
        // Hacer filtro de name con el filter
        const consulta = filtroTag ? query(itemCollection, filtroTag) : itemCollection

        const pedido = getDocs(consulta)
            .then(({ docs }) => {
                const docsFormateado = docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setLoading(false)
                setItems(docsFormateado)
            })
            .catch((error) => {
                console.log(error)
            })


    }, [filter])

    return (

        <ItemList items={items} loading={loading} filter={filter} />
    )
}

export default ItemListContainer
