import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { itemCollection } from "./firebase";
import { getDocs, orderBy, query, where } from "firebase/firestore";

function ItemListContainer({ filter, loading, setLoading, search }) {

    const [items, setItems] = useState([])


    useEffect(() => {

        const collectionAndFilters = [itemCollection]

        filter.tag && collectionAndFilters.push(where("tag", "==", filter.tag))
        filter.desde && collectionAndFilters.push(where("price", ">=", filter.desde))
        filter.hasta && collectionAndFilters.push(where("price", "<=", filter.hasta))
        filter.orden && collectionAndFilters.push(orderBy("price", filter.orden))

        const consulta = query(...collectionAndFilters)

        getDocs(consulta)
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

        <ItemList items={items} loading={loading} search={search} />
    )
}

export default ItemListContainer
