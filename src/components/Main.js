import ItemListContainer from "./ItemListContainer"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Header from "./Header"

function Main({ search, nombre }) {

    // Variables de filtro de rango de precios //
    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")
    let { tag: tagName } = useParams()
    const [orden, setOrden] = useState("")
    const [filter, setFilter] = useState({ tag: "", desde: "", hasta: "", orden: "" })
    // Estado de carga //
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setFilter({
            ...filter,
            tag: tagName
        })
        setLoading(true)
    }, [tagName]);

    const filterItems = (e) => {
        if (e.target.text === "Mostrar Todo") {
            setDesde("")
            setHasta("")
            setOrden("")
            setFilter({
                ...filter,
                desde: "",
                hasta: "",
                orden: ""
            })
        }
        setLoading(true)
    }

    const handleSubmitPrecios = (e) => {
        e.preventDefault()
        setFilter({
            ...filter,
            desde,
            hasta
        })
    }

    const handleChangeDesde = (e) => {
        setDesde(Number(e.target.value))
    }

    const handleChangeHasta = (e) => {
        setHasta(Number(e.target.value))
    }

    const handleChangeOrden = (e) => {
        setOrden(e.target.value)
        setFilter({
            ...filter,
            orden: e.target.value
        })
    }


    return (
        <>
            {nombre && <Header nombre={nombre} />}
            <main>
                {/* Los filters meterlos en un componente aparte */}
                <div className="filters">
                    <h3 id="clearFilters"><Link to={"/"} onClick={filterItems} element={<Main />}>Mostrar Todo</Link></h3>
                    <ul>
                        <li><Link to={"/cat/microprocesador"} onClick={filterItems} element={<Main />}>Microprocesador</Link></li>
                        <li><Link to={"/cat/placa"} onClick={filterItems} element={<Main />}>Placa</Link></li>
                        <li><Link to={"/cat/fuente"} onClick={filterItems} element={<Main />}>Fuente</Link></li>
                        <li><Link to={"/cat/gabinete"} onClick={filterItems} element={<Main />}>Gabinete</Link></li>
                    </ul>
                    <h3>Precios:</h3>
                    <form onSubmit={handleSubmitPrecios}>
                        <label target="desde">Desde:</label>
                        <div className="inputPrecio">
                            <p>$</p>
                            <input type="number" name="desde" id="desde" value={desde} onChange={handleChangeDesde} />
                        </div>
                        <label target="hasta">Hasta:</label>
                        <div className="inputPrecio">
                            <p>$</p>
                            <input type="number" name="hasta" id="hasta" value={hasta} onChange={handleChangeHasta} />
                        </div>
                        <button type="submit"><FontAwesomeIcon icon={faChevronRight} /> </button>
                    </form>
                    <h3>Ordenar:</h3>
                    <select name="orden" value={orden} onChange={handleChangeOrden}>
                        <option value=""></option>
                        <option value="desc">por precio de mayor a menor</option>
                        <option value="asc">por precio de menor a mayor</option>
                    </select>
                </div>
                <ItemListContainer filter={filter} loading={loading} setLoading={setLoading} search={search} />
            </main>
        </>
    )
}


export default Main
