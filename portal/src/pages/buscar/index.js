import ConteudoBuscar from "../../components/conteudoBuscar";
import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css'

export default function Buscar(){
    return(
        <>
            <Header/>
            <div className="sectionBuscar">
                <img src="./assets/logo.svg" alt="Logo"  className="logoBuscar"/>
                <ConteudoBuscar/>
            </div>
            <Footer/>
        </>
    )
}