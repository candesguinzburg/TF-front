import "../css/deportes.css"
import deportes from "../data"


const Deportes = () => {
    return (
        <div className="fondo">
            <div className="BDeportes">
                <h1 className="titulo-dep">Bienestar Sport</h1>
                <h2 className="subTitulo">Deportes que trabajamos</h2>
                {deportes.map((deportes) => {
                    return (
                        <div className="fondo-dep">
                            <img src={deportes.image} className="img-dep" alt="deporte 1" />
                            <p className="nombre-dep">{deportes.name}</p>
                        </div>

                    )
                })
                }
            </div>
        </div>
    )
}
export default Deportes