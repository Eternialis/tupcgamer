import { Link } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

function Item({ id, name, tag, price, img }) {

    return (
        <Link to={`/item/${id}`} element={<ItemListContainer />} className="productsContainer__card">
            <img src={img} alt="" className="productsContainer__img" />
            <div className="productsContainer__text">
                <h3 className="productsContainer__Title">{name}</h3>
                <p>{tag}</p>
                <h4>$ {price}</h4>
            </div>
        </Link>
    )
}

export default Item
