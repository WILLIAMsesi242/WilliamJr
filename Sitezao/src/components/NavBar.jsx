import { Link } from "react-router-dom"
import './Lindo.css'


function NavBar(){
    return(
        <header>
        <nav>
         
            <Link to="/">🏡Home</Link>
            <br/>
            <Link to="/Sobre">🤔Sobre</Link>
            <br />
            <Link to="/Contato">📞Contato</Link >
         
        </nav>
        </header>
    )
}

export default NavBar;