import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import models from "./../database/models"

export default {
    async funLogin(req, res){
        const { email, password } = req.body;

        const user = await models.User.findOne({
            where: {email: email}
        });
        if(!user){
            return res.status(401).json({mensaje: "Credenciales Incorrectas"});
        }

        // verificamos la contraseña
        let correcto = await bcrypt.compare(password, user.password);
        if(correcto){
            // generar JWT
            let payload = {
                id: user.id,
                email: user.email,
                time: new Date()
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET || "JWT_SECRET", {
                expiresIn: 60 * process.env.JWT_TIEMPO_EXPIRACION_MINUTOS || 60,
            })

            return res.status(200).json({
                access_token: token,
                user: user,
                error: false
            })

        }else{
            return res.status(401).json({mensaje: "Credenciales Incorrectas"})
        }
    },


    async funRegister(req, res){
        // query  =  /api/v1/auth/register?email=admin@mail.com&password=admin54321
        console.log(req.query);
        // params = /api/v1/auth/register/:nombre?email=admin@mail.com&password=admin54321
        // console.log(req.params.nombre)
        // headers  =  /api/v1/auth/register
        // console.log(req.headers);
        // body 
        let datos_usuario = req.body;
        // Validar los datos

        // console.log("DATOS ENTRANTES: ", datos_usuario)
        // encriptar la contraseña
        console.log(datos_usuario)
        let salt_round = process.env.BCRYPT_SALT || 12;
        datos_usuario.password = await bcrypt.hash(datos_usuario.password, 12);
        // console.log("DATOS CIFRADOS: ", datos_usuario);

        console.log(datos_usuario)
        const user = await models.User.create(datos_usuario);
        
        if(user.id)
            return res.status(201).json({mensaje: "Usuario Registrado"});

        return res.status(422).josn({error: true, mensaje: "Error al registrar el usuario"});
    },
    funPerfil(req, res){
        return res.status(200).json(req.user);
    },
    funLogout(req, res){
        res.json({mensaje: "Saliendo..."})
    }
};