const dbLanding = require('./router/dblanding');
const dbNeas = require('./router/dbNeas');
const express = require('express')

const app = express()
//Se requiere la conexion solo en la app
require('./db')()//()se esta llamando la funcion

app.use(express.json())

app.use('landing', dbLanding)
app.use('neas', dbNeas)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))