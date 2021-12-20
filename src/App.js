import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import UserImg from "./assets/img/usuario/usernamemini.jpg"

function App() {

    const username = "Username"
    const img = UserImg
    const greeting = `Bienvenido ${username}`

    return (
        <>
            <NavBar username={username} img={img} />
            <header>
                <ItemListContainer greeting={greeting} />

            </header>
        </>
    )
}

export default App;