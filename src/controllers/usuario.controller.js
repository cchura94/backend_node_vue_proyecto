import models from "./../database/models";
import bcrypt from "bcrypt"

export default {
    async funListar(req, res){
        const usuarios = await models.User.findAll({
            attributes: ['id', 'name', 'email']
        });
        return res.status(200).json(usuarios);
    },
    async funGuardarUsuario(req, res){
        const { name, email, password } = req.body;
        try {
            // validación simple
            if(!name || !email || !password){
                return res.status(400).json({error: 'Faltan datos requeridos'});
            }

            // crear un nuevo Usuario
            const pass = await bcrypt.hash(password, 12)
            
            const nuevoUsuario = await models.User.create({
                name,
                email,
                password: pass
            });
            return res.status(201).json({mensaje: "Usuario Registrado", usuario: {id: nuevoUsuario.id, name: nuevoUsuario.name, email: nuevoUsuario.email}});

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: 'Error al registrar el usuario'});
        }
    },
    async funMostrar(req, res){
        const {id} = req.params;
        try {
            // crear un nuevo Usuario
            const user = await models.User.findByPk(id, {
                attributes: ['id', 'name', 'email']
            })
            
            if(!user){
                return res.status(404).json({error: "Usuario no encontrado"});
            }
            return res.status(200).json({id: user.id, name: user.name, email: user.email});

        } catch (error) {
            console.log(error);
            return res.status(500).json({error: 'Error al obtener el usuario'});
        }
    },
    async funModificar(req, res){
        // const id = req.params.id;
        const { id } = req.params;
        const { name, email, password } = req.body;
        
        console.log("*****: ", req.body);
        
        try {
            const user = await models.User.findByPk(id);

            if(!user){
                return res.status(404).json({error: 'Usuario No encontrado'});
            }

            // modificar
            if(name){
                user.name = name;
            } 
            if(email) user.email = email;
            if(password){
                user.password = await bcrypt.hash(password, 12);
            };

            // guardar
            await user.save();

            return res.status(200).json({mensaje: "Usuario actualizado", usuario: {id: user.id, name: user.name, email: user.email}});
            
        } catch (error) {
            return res.status(500).json({error: "Error al modificar el usuario"});
        }
    },
    async funEliminar(req, res){
        const { id } = req.params;
        try {
            const user = await models.User.findByPk(id);
            if(!user){
                return res.status(404).json({error: 'Usuario No encontrado'});
            }

            // await user.destroy();
            return res.status(200).json({mensaje: "Usuario eliminado"});


        } catch (error) {
            return res.status(500).json({error: "Error al eliminar el usuario"});

        }
    }
}