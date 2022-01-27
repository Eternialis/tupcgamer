import Item from "./Item"

const ItemList = ({ items, loading }) => {

    return (
        <div className="productsContainer">
            {loading ? <div className="loaderContainer"><span className="loader"></span></div> : items.map(item => <Item id={item.id} name={item.name} tag={item.tag} price={item.price} img={item.img} key={item.id} />)}
        </div>
    )
}

export default ItemList
