import ItemListContainer from "./ItemListContainer"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Header from "./Header"

function Main({ search, nombre }) {

    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")
    let { tag: tagName } = useParams()
    const [orden, setOrden] = useState("")
    const [filter, setFilter] = useState({ tag: "", desde: "", hasta: "", orden: "" })

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
                    <Link to={"/"} onClick={filterItems} element={<Main />}><h3 id="clearFilters">Mostrar Todo</h3></Link>
                    <ul>
                        <Link to={"/cat/microprocesador"} onClick={filterItems} element={<Main />}><li>Microprocesador</li></Link>
                        <Link to={"/cat/placa"} onClick={filterItems} element={<Main />}><li>Placa</li></Link>
                        <Link to={"/cat/fuente"} onClick={filterItems} element={<Main />}><li>Fuente</li></Link>
                        <Link to={"/cat/gabinete"} onClick={filterItems} element={<Main />}><li>Gabinete</li></Link>
                    </ul>
                    <h4>Precios:</h4>
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
                        <button className="submitBtn" type="submit"><FontAwesomeIcon icon={faChevronRight} /> </button>
                    </form>
                    <h4>Ordenar:</h4>
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
