
export default {
    funLogin(req, res){
        res.json({mensaje: "Logueando..."})
    },
    funRegister(req, res){
        res.json({mensaje: "Registrado..."})
    },
    funPerfil(req, res){
        res.json({mensaje: "Obteniendo el Perfil..."})
    },
    funLogout(req, res){
        res.json({mensaje: "Saliendo..."})
    }
};