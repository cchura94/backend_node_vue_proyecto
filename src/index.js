import express from "express";
import rutas from './routes'
import cors from "cors"

const app = express();

// habilitando cors
app.use(cors())

// vizualizar archivos estaticos
app.use(express.static('public'))

// aceptar peticiones en formato JSON (req.body)
app.use(express.json());


// rutas
app.use("/api/v1", rutas);


app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
})
