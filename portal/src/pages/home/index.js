import PrimeiraSection from '../../components/conteudoHome/primeiraSection';
import SegundaSection from '../../components/conteudoHome/segundaSection';
import Header from '../../components/header';
import './index.css';

function Home() {
  return (
    <div className="home">
      <Header/>
      <PrimeiraSection/>
      <SegundaSection/>
    </div>
  );
}

export default Home;
