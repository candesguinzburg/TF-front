import { Routes, Route, } from "react-router-dom"
import Ubicacion from "./componentes/ubicacion"
import Home from "./componentes/home"
import Deportes from "./componentes/deportes.jsx"
import IniciarSecion from "./componentes/iniciarSecion.js"
import Header from "./componentes/header"
import SendMail from "./componentes/sendMail.js"
import Registrate from "./componentes/registrate.js"
import Error from "./componentes/error.jsx"


const Nav = () => {
  return (
    <div>
  <Header></Header>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/Deportes" element={<Deportes/>}></Route>
    <Route path="/Ubicacion" element={<Ubicacion/>}></Route>
    <Route path="/IniciarSecion" element={<IniciarSecion />}></Route>
    <Route path="/sendMail" element={ <SendMail />}></Route>
    <Route path="/registrate" element={<Registrate/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Routes>
  </div>
  )
}

  

export default Nav
