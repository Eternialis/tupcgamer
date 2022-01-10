import ItemCounter from "./ItemCounter"

function ItemDetail({ item }) {

    const { name, price, tag, img } = item

    console.log(item)

    return (
        <div className="productDetailContainer">
            <img src={img} alt="" className="productDetailContainer__img" />
            <div className="productDetailContainer__text">
                <h1 href="/#" className="productContainer__Title">{name}</h1>
                <p>{tag}</p>
                <h3>$ {price}</h3>
                <ItemCounter />
            </div>
        </div>
    )
}

export default ItemDetail
