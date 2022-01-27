# Desarrollo de proyecto

## Uso de proyecto

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

- Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
PORT=3000
MONGODB='THE URL_DB'
```

## Instalación de librerías

- dotenv
- express
- mongoose
- nodemon
- cors

```shell
$ npm install o npm i
```

## Correr el proyecto

Para correr el proyecto basta con ejecutar:

```shell
$ npm run dev
```

## USO DE EP's

Los servicios se consumen desde la API de. [TakoFly](https://takofly.herokuapp.com)

##### API

-Get Airports

```shell
curl --location --request GET 'https://takofly.herokuapp.com/airports/readAll'
```

-Get Flights

```shell
curl --location --request GET 'https://takofly.herokuapp.com/flights/readAll'
```

-Get Flight Details

```shell
curl --location --request GET 'https://takofly.herokuapp.com/flights/readone/:idFlight'
```
