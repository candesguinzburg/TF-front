import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Header from "./componentes/header.jsx"
import Footer from "./componentes/footer.jsx"
import Nav from './App'
import { BrowserRouter } from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header></Header>
    <Nav></Nav>
    <Footer></Footer>
  </BrowserRouter>
)


reportWebVitals()
