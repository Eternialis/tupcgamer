import ItemCounter from "./ItemCounter"

function ItemDetail({ name, tag, price, img }) {


    return (
        <div className="productDetailContainer">
            <img src={img} alt="" className="productDetailContainer__img" />
            <div className="productDetailContainer__text">
                <a href="/#" className="productContainer__Title">{name}</a>
                <p>{tag}</p>
                <h4>$ {price}</h4>
                <ItemCounter />
            </div>
        </div>
    )
}

export default ItemDetail
