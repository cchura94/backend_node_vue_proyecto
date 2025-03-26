import express from "express";
// import rutas from './routes'
import cors from "cors"
require('dotenv').config()

// importandos archivos routes
import authRoutes from "./routes/auth.routes"
import categoriaRoutes from "./routes/categoria.routes"
import usuarioRoutes from "./routes/usuario.routes"
import productoRoutes from "./routes/producto.routes"

const app = express();

const PORT = process.env.PORT || 3000

// habilitando cors
app.use(cors())

// vizualizar archivos estaticos
app.use(express.static('public'))

// aceptar peticiones en formato JSON (req.body)
app.use(express.json());


// rutas
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categoria", categoriaRoutes)
app.use("/api/v1/usuario", usuarioRoutes)
app.use("/api/v1/producto", productoRoutes)


app.listen(PORT, function(){
    console.log(`Servidor iniciadoo en http://127.0.0.1:${PORT}`);
})
