import { Link, Outlet } from "react-router-dom"
import Login from "../login/login"
const Home = () => {
    return(
        <>
        <h1>Thi is home</h1>
        <a href="../login"><button>Login</button></a>
        </>
    )
}
export default Home