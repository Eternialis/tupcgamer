import NavBar from "./components/NavBar";
import Header from "./components/Header"
import UserImg from "./assets/img/usuario/usernamemini.jpg"
import Main from "./components/Main"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {

    const username = "Username"
    const img = UserImg
    const greeting = `Bienvenido ${username}`

    return (
        <>
            <NavBar username={username} img={img} />
            <Header greeting={greeting} />
            <Main />
            <ItemDetailContainer />
        </>
    )
}

export default App;