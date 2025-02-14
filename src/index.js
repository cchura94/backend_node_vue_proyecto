import express from "express";

const app = express();

app.get("/", function(req, res){
    return res.send({mensaje: "Bienvenido a Node.js"});
});

app.get("/saludo", function(req, res){
    return res.json({mensaje: "Saludos DEVS......."});
})

app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
})
