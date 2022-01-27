import ItemListContainer from "./ItemListContainer"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Main() {

    const [filter, setFilter] = useState({ tag: "Mostrar Todo", desde: 0, hasta: 0 })
    const [loading, setLoading] = useState(true)
    let { tag: tagName } = useParams()

    // useEffect(() => {

    //     console.log(tagName)

    //     setFilter({
    //         ...filter,
    //         tag: tagName
    //     })
    //     setLoading(true)

    // }, [tagName]);



    const filterItems = (e) => {
        setFilter({
            ...filter,
            tag: e.target.textContent
        })
        setLoading(true)
    }

    const [desde, setDesde] = useState(0);
    const [hasta, setHasta] = useState(0);

    const handleSubmitPrecios = (e) => {
        e.preventDefault()
        setFilter({
            ...filter,
            desde: desde,
            hasta: hasta
        })
    }

    const handleChangeDesde = (e) => {
        setDesde(Number(e.target.value))
        console.log(desde)
    }

    const handleChangeHasta = (e) => {
        setHasta(Number(e.target.value))
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
                <form onSubmit={handleSubmitPrecios}>
                    <label target="desde">Desde:</label>
                    <div className="inputPrecio">
                        <p>$</p>
                        <input type="number" name="desde" id="desde" onChange={handleChangeDesde} />
                    </div>
                    <label target="hasta">Hasta:</label>
                    <div className="inputPrecio">
                        <p>$</p>
                        <input type="number" name="hasta" id="hasta" onChange={handleChangeHasta} />
                    </div>
                    <button type="submit"><FontAwesomeIcon icon={faChevronRight} /> </button>
                </form>
            </div>
            <ItemListContainer filter={filter} loading={loading} setLoading={setLoading} />


        </main>
    )
}


export default Main
