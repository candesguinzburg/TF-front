import React, { useState } from "react"
import axios from 'axios'
import "../css/sendMail.css"
import { useNavigate } from 'react-router-dom'

const SendMail = () => {
    
    const [usuario, setUsuario] = useState('')
    const [asunto, setAsunto]= useState('')
    const [mailContent, setMailContent] = useState("")
    const [numeroDeContacto, setNumeroDeContacto]= useState('')
    const navigate = useNavigate()

    const Resetear = () => {
        setUsuario("")
        setAsunto("")
        setMailContent("")
        setNumeroDeContacto("")
    }

    const enviar = async (e) => {
        e.preventDefault()
        console.log(`enviaste este mail: ${mailContent}`)

        try{
            const response = await axios.post(
                '/users/sendMail', 
            { usuario, mailContent, asunto, numeroDeContacto },
            { withCredentials: true } 
            )
            console.log('respuesta del servidor',response)
            
            alert('correo enviado correctamente')
            navigate('/Home')
        
        } catch (error){
            console.error('Error al enviar el correo:', error)
            alert('Error al enviar el correo')
            console.log(error)
            Resetear()

        }
    }
    return (
        <div className="fondo">

            <h1 className="titInfo2">Bienestar Sport</h1>
            <h2 className="subInfo2">Mandanos un mail con tu consulta:</h2>
            <form onSubmit={enviar}>
            <label className="label2">
                    Nombre de usuario: 
                    <br></br>
                    <input 
                    className="input" 
                    type="text" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} 
                    required/>
                </label>
                <label className="label2">
                    Asunto: 
                    <br></br>
                    <input 
                    className="input" 
                    type="text" 
                    value={asunto} 
                    onChange={(e) => setAsunto(e.target.value)} 
                    required/>
                </label>
                <label className="label2">
                    Mail:<br></br>
                    <textarea 
                    className="input" 
                    value={mailContent} 
                    onChange={(e) => setMailContent(e.target.value)} 
                    cols="100" 
                    rows="6"
                    required>
                    </textarea>
                </label>
                <label className="label2">
                    Numero de contacto: 
                    <br></br>
                    <input 
                    className="input" 
                    type="number" 
                    value={numeroDeContacto} 
                    onChange={(e) => setNumeroDeContacto(e.target.value)} 
                    required/>
                </label>
                <div className="botones2">
                    <button className="bot2" type="submit"><strong>Enviar</strong></button>
                    <button className="bot2" type="button" onClick={Resetear} ><strong>Borrar</strong></button>
                </div>
            </form>

        </div>
    )
}
export default SendMail