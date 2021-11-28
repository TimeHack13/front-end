import { Navigate, Route, Outlet } from "react-router-dom";


function RotasProtegidas() {
   return true ? <Outlet /> : <Navigate to="/login" />;
}

export default RotasProtegidas;
