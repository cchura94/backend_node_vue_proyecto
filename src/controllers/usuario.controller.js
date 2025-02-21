import models from "./../database/models";

export default {
    async funListar(req, res){
        const usuarios = await models.User.findAll();
        return res.status(200).json(usuarios);
    },
    funGuardarUsuario(req, res){

    },
    funMostrar(req, res){

    },
    funModificar(req, res){

    },
    funEliminar(req, res){

    }
}