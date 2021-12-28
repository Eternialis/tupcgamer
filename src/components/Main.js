import ItemListContainer from "./ItemListContainer"

function Main() {
    return (
        <main>
            <div className="filters">
                <h3 id="clearFilters">Mostrar todo</h3>
                <ul>
                    <li>Microprocesador</li>
                    <li>Placa</li>
                    <li>Fuente</li>
                    <li>Gabinete</li>
                </ul>
            </div>
            <ItemListContainer />

        </main>
    )
}


export default Main
