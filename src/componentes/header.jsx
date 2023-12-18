import Log from "../img/bs.png"
import "../css/header.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={Log} alt="Logo Bienestar Sport" />
            </div>
            <div>
                <nav >
                    {/* boton home en pantallas grandes */}
                    <ul className="navegar">
                        <li className="Navboton">
                            <Link to="home" className="Navnombre"><strong> Home </strong></Link>
                        </li>
                        {/* icono home en pantallas chicas */}
                        <li className="Navicon">
                            <Link className="Navcolor" to="home">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                </svg>
                            </Link>
                        </li>
                        {/* boton deportes en pantallas grandes */}
                        <li className="Navboton">
                            <Link to='/deportes' className="Navnombre"><strong> Deportes </strong></Link>
                        </li>
                        {/* icono deportes en pantallas chicas */}
                        <li className="Navicon">
                            <Link to="/deportes" className="Navcolor"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </svg></Link>
                        </li>
                        {/* boton ubicacion en pantallas grandes */}
                        <li className="Navboton">
                            <Link to='/ubicacion' className="Navnombre"><strong>  encontranos </strong></Link>
                        </li>
                        {/* icono ubicacion en pantallas chicas */}
                        <li className="Navicon">
                            <Link className="Navcolor" to="/ubicacion"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg></Link>
                        </li>
                        {/* boton contacto en pantallas grandes */}
                        <li className="Navboton">
                            <Link to='iniciarSecion' className="Navnombre"><strong> Contactate </strong></Link>
                        </li>
                        {/* icono contacto en pantallas chicas */}
                        <li className="Navicon">
                            <Link to="iniciarSecion" className="Navcolor"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header