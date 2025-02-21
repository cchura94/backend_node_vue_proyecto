import jwt from "jsonwebtoken"
import { jwtDecode } from "jwt-decode";

const authMiddleware = (req, res, next) => {
    let token = '';
    if(req.headers.authorization){
        token = req.headers.authorization.split(' ')[1]
        // [Bearer, TOKEASKJFDSDKJFKSDFNSDF]

    }
    console.log(token);
    if(!token){
        return res.status(401).json({message: "No se proporcionó el token de seguridad"});
    }
    jwt.verify(token, "JWT_SECRET", (error, decode) => {
        if(error){
            return res.status(401).json({
                auth: false,
                message: "El token ingresado es incorrecto o ha expirado"
            })
        }
        const decoded = jwtDecode(token);
        console.log(decoded)
        // registrar la hora de ingreso al sistema en la BD
        next()
    });   
    
}

export default authMiddleware;