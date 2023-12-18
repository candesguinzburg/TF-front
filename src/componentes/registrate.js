import "../css/iniciarSecion.css"
import "../css/iniciarSecion.css"
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registrate = () =>  {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const Resetear = () => {
        setNombre("")
        setMail("")
        setpassword("")
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            const response = await axios.post('/users/create', {
                nombre,
                mail,
                password
            })
            console.log('respuesta: ', response.data)
            
            navigate('/sendMail')

            setNombre('')
            setMail('')
            setpassword('')

        }catch(error){
            console.log(`tenemos un error en ${error}`)
            alert('Error durante el registro. Por favor, inténtalo de nuevo.')
            Resetear()
        }

    }

    return (
        <div className="fondo">
            <h1 className="titInfo">Bienestar Sport</h1>
            <h2 className="subInfo">Contactate con nosotros:</h2>
            <form onSubmit={handleSubmit} className="formulario">
            <h3 className="sub2">Registrate:</h3>
                <label className="label">Nombre de usuario:
                    <input 
                    className="input" 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required/>
                </label>
                <br />

                <label className="label"> Email:<br/>
                    <input 
                    className="input" 
                    type="text" 
                    value={mail} 
                    onChange={(e) => setMail(e.target.value)}
                    required />
              </label>
                <br />

                <label className="label">Contraseña:
                    <input 
                    className="input" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setpassword(e.target.value)}
                    required />
</label>
                <a href="/iniciarSecion">¿Ya tenes un usuario?</a>
                <div className="botones">
                    <button className="bot" type="submit" ><strong>Crear usuario</strong></button>
                    <button className="bot" type="button" onClick={Resetear}><strong>Borrar</strong></button>
                </div>
            </form>

        </div>
    )
}


export default Registrate