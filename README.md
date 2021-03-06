# Farma-Api
## Descripcion
El proyecto trata de una pagina que muestra productos disponibles en una farmacia
los cuales los obtiene de una REST API
## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

 - Armado web en servidor (SSR)
 - REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto local:

 1. Descarga del repo
 2. Instalar módulos en el **/website** y en la  **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **EcoFarma** en MongoDB
 3. Levantar el servicio con el comando `node index.js` dentro de **ApiRest/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API

 