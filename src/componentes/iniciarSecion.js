import "../css/iniciarSecion.css"
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const IniciarSecion = () => {
  const [mail, setMail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const Resetear = () => {
    setMail("")
    setpassword("")
  }
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/users/login", {
        mail,
        password,
      })
      console.log(response)

      if (response.status === 200) {
        console.log("pudiste entrar")
        navigate("/sendMail")
      } else {
        console.log("Usuario o contraseña incorrecta")
        Resetear()
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error)
      alert(
        "Error durante el inicio de sesión. Por favor, inténtalo de nuevo."
      )
      Resetear()
    }
  }

  return (
    <div className="fondo">
      <h1 className="titInfo">Bienestar Sport</h1>
      <h2 className="subInfo">Contactate con nosotros:</h2>
      <form onSubmit={handleLogin} className="formulario">
        <h3 className="sub2">Iniciar secion:</h3>
        <label className="label">
          Email: <br />
          <input
            className="input"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          Contraseña: <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <a href="/registrate"> Todavia no tenes una cuenta?</a>
        <div className="botones">
          <button className="bot" type="submit">
            <strong>Iniciar Sesión</strong>
          </button>
          <button className="bot" type="button" onClick={Resetear}>
            <strong>Borrar</strong>
          </button>
        </div>
      </form>
    </div>
  )
}

export default IniciarSecion