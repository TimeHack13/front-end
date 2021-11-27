import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Empresas from "./pages/empresas";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/empresas" element={<Empresas />} />  
              <Route path="/cadastro" element={<Cadastro />} /> 
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
