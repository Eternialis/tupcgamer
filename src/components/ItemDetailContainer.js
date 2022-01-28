import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { itemCollection } from "./firebase";

function ItemDetailContainer({ setItemAddModal, user }) {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    let { id } = useParams()

    useEffect(() => {

        const pedido = getDoc(doc(itemCollection, id))
        pedido
            .then((doc) => {
                setLoading(false)
                setItem({ id: id, ...doc.data() })
            })
            .catch((err) => console.log(err))
    }, [id]);

    return (
        <>
            {loading ? <div className="loaderContainer"><span className="loader"></span></div> : <ItemDetail item={item} setItemAddModal={setItemAddModal} user={user} />}
        </>
    )
}

export default ItemDetailContainer
