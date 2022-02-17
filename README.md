
# Tu PC Gamer
[![Netlify Status](https://api.netlify.com/api/v1/badges/36dfc71c-0370-4765-a63e-df11935902ac/deploy-status)](https://app.netlify.com/sites/tupcgamer/deploys)
### Web E-commerce
El sitio web Tu PC gamer simula la compra de articulos para computadora. Se puede ver la demostración en [https://tupcgamer.netlify.app/](https://tupcgamer.netlify.app/).
Al entrar en la página, el usuario puede ver todos los productos, pero debe registrarse para poder comprarlos.

Una vez registrado, automáticamente puede iniciar sesión con los datos de nombre de usuario y contraseña cargados.

A partir de ese momento, se habilitan varios botones en la barra de navegación: el usuario podrá ir a su perfil, cerrar sesión o acceder al carrito.

Ahora el usuario puede comprar cualquier producto entrando a su detalle y hacienco click en el botón "Agregar al carrito". Debajo hay un manejador de la cantidad de productos que el usuario desee comprar. Cuando el usuario confirme la compra, un modal aparecerá para llevarlo al inicio o a su carrito.

Desde la ventana del carrito, el usuario puede quitar productos, acceder a su detalle así como vaciarlo totalmente con un solo click.

También puede confirmar la compra, lo que lo va a llevar a una página para que verifique sus datos de contacto y la dirección a donde será enviado el producto.

Una vez confirmados los datos, la página redireccionará al usuario a un resumen de su compra que incluye un código que puede pegar en su perfil para revisarlo.

## Contribución
### Cómo configurar el fork correctamente
Primero tenes que agregar el repositorio con el siguiente código dentro de una carpeta con el repositorio de Git instalado.
```
$ git remote add tupcgamer https://github.com/Eternialis/tupcgamer.git
```
Con el comando `git remote -v` podés revisar que lo hayas cargado correctamente. Tiene que devolverte:
```
tupcgamer       https://github.com/Eternialis/tupcgamer.git (fetch)
tupcgamer       https://github.com/Eternialis/tupcgamer.git (push)
```
Ejecutá `$ git pull tupcgamer main` para descargar el proyecto y luego `npm i` para instalar todas las dependencias.


# APIs
A continuación un listado de las dependencias utilizadas en el proyecto.

|Dependencia|Versión|Descripción|
|---|---|---|
|[firebase](https://www.npmjs.com/package/firebase)|9.6.3|Utilizada por su biblioteca de Firestore como base de datos del proyecto.|
|[react-date-picker](https://www.npmjs.com/package/react-date-picker)|8.3.6|Permite al usuario elegir su fecha de nacimiento dentro de un calendario.|
|[sass](https://www.npmjs.com/package/sass)|1.46.0|Permite modificar el estilo de la página con la extensión .scss|
|[formik](https://www.npmjs.com/package/formik)|1.46.0|Usada para manejar los formularios de manera óptima.|
|[yup](https://www.npmjs.com/package/yup)|1.46.0|Usada para validaciones de inputs.|

# Context
**Nombre de la variable: `context`** <br>
El context se utiliza para visualizar la información del carrito de compras. Además posee un método reducer para manipular dicha información. Se encuentra en el componente `CartContext`. <br>
Ejemplo de uso:
```javascript
import { context } from "./CartContext";
import { useContext } from "react"

const { cartItems, totalPrice, cantidadTotal, cartReducer } = useContext(context)

cartReducer({
    item: {id: 'FiPEmA4EME7Ubcbeqnla', fab: 'Asus', stock: 500, tag: 'fuente', …},
    cantidad: 1,
    status: "agregar"
})
```
|Propiedad|Tipo|Descripción|
|---|---|---|
|cantidadTotal|number|Cantidad total de productos cargados en el carrito.|
|cartItems|array|Detalle de cada uno de los productos (object) cargados.|
|cartReducer(state, action)|method|El reducer maneja las propiedades del context tanto para agregar un producto, quitarlo, vaciar el carrito o restaurarlo del sessionStorage.|
|totalPrice|number|Valor de la sumatoria del precio de todos los productos cargados.|

# Base de datos
Como base de datos se usa Firestore y está dividida en colecciones. [Acá](https://firebase.google.com/docs/reference/js/firestore_?authuser=0) podés encontrar la documentación revisada para manejarla. Las colecciones están declaradas en el componente `firestore`. A continuación se hace un resumen de las colecciones utilizadas en la página:

| Nombre | Descripción | ID |
|---|---|---|
|usersCollection|Contiene las órdenes de productos comprados por los usuarios. Se genera automáticamente al finalizar la compra.|Generado automáticamente|
|itemCollection|Almacena todos los productos. La carga se realiza de manera manual a través de Firestore.|Generado automáticamente|
|coleccionOrdenes|Contiene la información de los usuarios necesaria para su inicio de sesión y la compra. Lo genera el usuario al registrarse.|Nombre de usuario|

### usersCollection
Nombre de la colección en Firestore: `usuarios`
|Propiedad|Tipo|Descripción|
|---|---|---|
|apellido|string|Apellido del usuario.|
|ciudad|string|Ciudad de residencia del usuario.|
|dirección|string|Dirección de residencia del usuario.|
|email|string|Email de contacto del usuario.|
|fechaNacimiento|string|Fecha de nacimiento del usuario.|
|nombre|string|Nombre del usuario.|
|pais|string|País de residencia del usuario.|
|pass|string|Contraseña del usuario.|
|provincia|string|Provincia de residencia del usuario.|
|telefono|string|Teléfono de contacto del usuario.|
|User|string|Nombre único de identificación del usuario.|

### itemColection
Nombre de la colección en Firestore: `productos`
|Propiedad|Tipo|Descripción|
|---|---|---|
|fab|string|Nombre de fabricante del producto|
|img|string|Ruta de la imágen del producto dentro de la página web.|
|name|string|Nombre del producto.|
|price|number|Precio en dólares del producto.|
|stock|number|Stock restante del producto en la tienda.|
|tag|string|Etiqueta del tipo de producto.|

### coleccionOrdenes
Nombre de la colección en Firestore: `ordenes`
|Propiedad|Tipo|Descripción|
|---|---|---|
|cantidadTotal|number|Cantidad total de productos comprados.|
|cartItems|array|Detalle de cada uno de los productos (object) comprados.|
|created_at|timestamp (object)|Registra el momento de subida a Firestore de la orden|
|totalPrice|number|Valor de la sumatoria del precio de todos los productos comprados.|
|usuario|object|Datos de contacto del usuario con el lugar a donde se debe realizar el envío.|
