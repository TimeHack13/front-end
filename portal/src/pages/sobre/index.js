import SegundaSection from '../../components/conteudoSobre/segundaSection';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './style.css'

function Sobre() {
    return (
       <div className="sobre">
           <Header/>
           <img src="./assets/bandeira.png" alt=""  className="firstSection"/>
           <SegundaSection/>
           <img src="./assets/local.png" alt=""  className="firstSection"/>
           <Footer/>
           
       </div>
    );
 }
 
 export default Sobre;