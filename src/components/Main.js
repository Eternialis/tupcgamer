import ItemListContainer from "./ItemListContainer"
import { Link } from "react-router-dom"
import { useState } from "react"


function Main() {

    const [filter, setFilter] = useState("Mostrar Todo")
    const [loading, setLoading] = useState(true)

    const filterItems = (e) => {
        setFilter(e.target.textContent)
        setLoading(true)
    }


    return (
        <main>
            <div className="filters">
                <h3 id="clearFilters"><Link to={"/"} onClick={filterItems} element={<Main />}>Mostrar Todo</Link></h3>
                <ul>
                    <li><Link to={"/cat/microprocesador"} onClick={filterItems} element={<Main />}>Microprocesador</Link></li>
                    <li><Link to={"/cat/placa"} onClick={filterItems} element={<Main />}>Placa</Link></li>
                    <li><Link to={"/cat/fuente"} onClick={filterItems} element={<Main />}>Fuente</Link></li>
                    <li><Link to={"/cat/gabinete"} onClick={filterItems} element={<Main />}>Gabinete</Link></li>
                </ul>
                <h3>Precios:</h3>
                <label target="hasta">Hasta:</label>
                <div className="inputPrecio">
                    <p>$</p>
                    <input type="number" name="hasta" id="hasta" />
                </div>
                <label target="desde">Desde:</label>
                <div className="inputPrecio">
                    <p>$</p>
                    <input type="number" name="desde" id="desde" />
                </div>
            </div>
            <ItemListContainer filter={filter} loading={loading} setLoading={setLoading} />


        </main>
    )
}


export default Main
