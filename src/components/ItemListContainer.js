import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { itemCollection } from "./firebase";
import { addDoc, getDocs, query, where } from "firebase/firestore";

function ItemListContainer({ filter, loading, setLoading }) {

    const [items, setItems] = useState([])


    useEffect(() => {
        // Funcion usada para agregar todos los productos del array de productos a la base de datos
        //productos.forEach(item => addDoc(itemCollection, item))
        // Probar el orderBy para ordenar los productos por precio de menor a mayor y viceversa
        const collectionAndFilters = [itemCollection]

        filter.tag && collectionAndFilters.push(where("tag", "==", filter.tag))
        filter.desde && collectionAndFilters.push(where("price", ">=", filter.desde))
        filter.hasta && collectionAndFilters.push(where("price", "<=", filter.hasta))
        // Hacer filtro de name con el filter
        const consulta = query(...collectionAndFilters)

        getDocs(consulta)
            .then(({ docs }) => {
                const docsFormateado = docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setLoading(false)
                setItems(docsFormateado)
                console.log(docsFormateado)
            })
            .catch((error) => {
                console.log(error)
            })


    }, [filter])

    return (

        <ItemList items={items} loading={loading} />
    )
}

export default ItemListContainer
