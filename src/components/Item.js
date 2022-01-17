import { Link } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

function Item({ id, name, tag, price, img }) {

    return (
        <div className="productsContainer__card">
            <img src={img} alt="" className="productsContainer__img" />
            <div className="productsContainer__text">
                <Link to={`/item/${id}`} element={<ItemListContainer />} className="productsContainer__Title">{name}</Link>
                <p>{tag}</p>
                <h4>$ {price}</h4>
            </div>
        </div>
    )
}

export default Item
