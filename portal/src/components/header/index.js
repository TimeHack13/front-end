import './style.css'
export default function Header(){
    return(
        <div className="header">
            <img src="./assets/logo.svg" alt=""/>
            <div className="menu">
                <div className="itensMenu">
                    <a href="#">Avaliar</a>
                    <a href="#">Buscar</a>
                    <a href="#">Sobre</a>
                </div>
                <div className="login">
                    <a href="#" className="log">Login</a>
                    <a href="#" className="cadastrar">Cadastrar</a>
                </div>
            </div>
        </div>
    )
}