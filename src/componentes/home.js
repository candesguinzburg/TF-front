import React, { useState, useEffect } from "react";
import axios from "axios";
import FotoI from "../img/fi.jpg";
import Foto2 from "../img/fi2.jpg";
import Foto3 from "../img/fe.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../css/home.css";

const Home = () => {
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [editCommentId, setEditCommentId] = useState(null);
  const [newCommentContent, setNewCommentContent] = useState("");

  useEffect(() => {
    // Hacer una solicitud para obtener los comentarios
    axios
      .get("/mostrar")
      .then((response) => {
        console.log("Datos recibidos:", response.data);
        setComentarios(response.data.comentario);
      })
      .catch((error) => {
        console.error("Error al obtener comentarios", error);
      });
  }, []);

  const resetear = () => {
    setUsuario("");
    setComentario("");
  };
  /* guardar comentarios */
  const subirCom = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/comentar", {
        usuario,
        comentario,
      });

      console.log("Respuesta del servidor:", response);
      alert("Comentario subido correctamente");

      const comentariosActualizados = await axios.get(
        "/mostrar"
      );
      setComentarios(comentariosActualizados.data.comentario);
      resetear();
    } catch (error) {
      console.error("Error al subir comentario", error);
      alert("Error al subir comentario");
      console.log(error);
      resetear();
    }
  };
  /* editar comentarios */
  const editar = (commentId, currentContent) => {
    setEditCommentId(commentId);
    setNewCommentContent(currentContent);
  };

  /* cancelar edicion */
  const CancelEdit = () => {
    setEditCommentId(null);
    setNewCommentContent("");
  };

  /* guardar edicion */
  const handleSaveEdit = async (commentId) => {
    try {
      await axios.post("/edit", {
        id: commentId,
        comentario: newCommentContent,
      });

      setEditCommentId(null);
      setNewCommentContent("");

      // Volver a cargar los comentarios
      const comentariosActualizados = await axios.get(
        "/mostrar"
      );
      setComentarios(comentariosActualizados.data.comentario);
    } catch (error) {
      console.error("Error al editar comentario", error);
      alert("Error al editar comentario");
    }
  };

  /* borrar comentarios */
  const borrar = async (id) => {
    try {
      const response = await axios.post("/borrar", { id });
      console.log(response.data.message);
      alert("Comentario borrado correctamente");
      const comActializados = await axios.get("/mostrar");
      setComentarios(comActializados.data.comentario);
    } catch (error) {
      console.error("error al borrar comentario");
    }
  };

  return (
    <>
      <div className="fondo">
        <h1 className="tit">Bienestar Sport</h1>
        <h2 className="sub">Todos los deportes en una sola esquina</h2>
        {/* carrucel */}
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={FotoI} alt="Primera imagen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto2} alt="Segunda imagen" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto3} alt="Tercera imagen" />
          </Carousel.Item>
        </Carousel>
        <p className="descripcionL">
          Somos un negocio familiar, con más de 33 años de trayectoria. En
          nuestro local puedes encontrar artículos de todos los deportes y
          disciplinas, de excelente calidad y al mejor precio. Además, contamos
          con un staff de vendedores que siempre te van a atender y asesorar de
          la mejor manera posible.
        </p>
        <div>
          {/* comentarios */}
          <h3>Opiniones de clientes:</h3>
          <div className="comentarios">
            {comentarios.map((comentario) => (
              <div key={comentario._id} className="com">
                <p>
                  <strong>Nombre:</strong> {comentario.usuario}
                </p>
                {editCommentId === comentario._id ? (
                  <div>
                    <textarea
                      value={newCommentContent}
                      onChange={(e) => setNewCommentContent(e.target.value)}
                    />
                    <br></br>
                    <button
                      className="Mboton"
                      onClick={() => handleSaveEdit(comentario._id)}
                    >
                      Guardar
                    </button>
                    <button className="Mboton" onClick={CancelEdit}>
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>
                      <strong>Comentario:</strong> {comentario.comentario}
                    </p>
                    <button
                      className="Mboton"
                      onClick={() =>
                        editar(comentario._id, comentario.comentario)
                      }
                    >
                      Editar
                    </button>
                    <button
                      className="Mboton"
                      onClick={() => borrar(comentario._id)}
                    >
                      Borrar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form nuevos comentarios  */}
        <div>
          <form onSubmit={subirCom} className="opiniones">
            <h3>Dejanos tu opinion</h3>
            <label className="label2">
              Nombre:
              <br />
              <input
                className="input"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </label>
            <label className="label2">
              Comentario:
              <br />
              <input
                className="input"
                type="text"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                required
              />
            </label>
            <div className="botones2">
              <button className="bot2" type="submit">
                <strong>Enviar</strong>
              </button>
              <button className="bot2" type="button" onClick={resetear}>
                <strong>Borrar</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;