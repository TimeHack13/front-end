import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import{ Navigate} from "react-router-dom"
import Home from "./pages/home";
import Avaliacao from "./pages/avaliacao";
import Login from "./pages/login";
import Sobre from "./pages/sobre";
import Buscar from "./pages/buscar";
import RotasProtegidas from "./components/RotasProtegidas";

function App() {
  return (
    <div className="App">
      <div>
        
          <Router>
              <Routes>
                <Route exact path="https://hypeplace.netlify.app/login" element={<Login />} />
                <Route path="https://hypeplace.netlify.app/" exact element={<RotasProtegidas />}> 
                  <Route path="https://hypeplace.netlify.app/home" element={<Home />} />
                  <Route path="https://hypeplace.netlify.app/avaliacao" element={<Avaliacao />}/>  
                  <Route path="https://hypeplace.netlify.app/sobre" element={<Sobre />} /> 
                  <Route path="https://hypeplace.netlify.app/buscar" element={<Buscar />} />
                </Route>                  
              </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
