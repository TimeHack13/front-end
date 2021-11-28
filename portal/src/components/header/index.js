import './style.css'
import{Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="header">
            <Link to="/home"><img src="./assets/logo.svg" alt=""/></Link>
            <div className="menu">
                <div className="itensMenu">
                    <Link to="/avaliacao">Avaliar</Link>
                    <Link to="/buscar">Buscar</Link>
                    <Link to="/sobre">Sobre</Link>
                </div>
                <div className="login">
                    <Link to="/" className="log">Login</Link>
                    <Link to="/" className="cadastrar">Cadastrar</Link>
                </div>
            </div>
        </div>
    )
}