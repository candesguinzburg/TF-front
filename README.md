
# Página web realizada como trabajo final de la diplomatura de programación web full stack de la Universidad Tecnológica Nacional. 

#### Cuenta con 4 pestañas navegables, en donde da información del negocio de venta de artículos deportivos, Bienestar Sport.

### Primer pestaña:
Contiene un carrusel que muestra fotos del local, información general acerca del comercio, además de un espacio en donde se puede tanto leer y comentar acerca del negocio.
Esos comentarios se pueden editar y borrar.

### Segunda pestaña:
Está conectada a una API y muestra los deportes de los cuales el local comercializa artículos.

### Tercer pestaña:
Contiene un mapa de la ubicación exacta del local y los links a las redes sociales.

### Cuarta pestaña:
Cuenta con la opción de loguearse y registrarse a la página, para luego poder enviar un mail de consulta al comercio.

## FRONTEND
Esta programado en REACT, utiliza la dependencia REACT-ROUTER-DOM para manejar los rutas de la aplicación,
y la librería BOOTSTRAP para proporcionar algunos estilos.

## BACKEND
Esta programado en NODE JS, y conectado con la base de datos MONGO DB, utilizando MOONGOSE para lograr la conexión. 
A su vez se utilizan las dependencias BCRYPT para encriptar las contraseñas, DOTENV para generar y proteger variables de entorno 
y HBS, EXPRESS,MORGAN, NODEMAILER, HTTP-ERRORS y DEBUG para facilitar el desarrollo.

## DEPLOY
Tanto en el FRONTEND como en el BACKEND se realizo en VERCEL, utilizando AXIOS para lograr la conexión.

### Deploy del front:
https://tf-front-candeguinzburg-gmailcom.vercel.app/ 

### Deploy del Back:
https://tfinal-b.vercel.app/users/







