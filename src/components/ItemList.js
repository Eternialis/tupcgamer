import Item from "./Item"

const ItemList = ({ items, loading }) => {

    return (
        <div className="productsContainer">
            {loading ? <p className="loading">Cargando...</p> : items.map(item => <Item name={item.name} tag={item.tag} price={item.price} img={item.img} key={item.id} />)}
        </div>
    )
}

export default ItemList
