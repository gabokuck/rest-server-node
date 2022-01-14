const { request, response } = require("express")


const isAdminRole = (req = request, res = response, next) => {

    if(!req.usuario){
        return res.status(500).json({
            msg: 'se quiere verificar el role sin validar el token primero'
        })
    }


    const {rol, nombre} = req.usuario;

    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es administrador - No tiene permisos para realizar esta operación`
        });
    }

    next();
}

const tieneRole = (...roles) => {
    return (req = request, res = response, next) => {

        if(!req.usuario){
            return res.status(500).json({
                msg: 'se quiere verificar el role sin validar el token primero'
            })
        }

        if(!roles.includes(req.usuario.rol)){
            res.status(401).json({
                msg: `El servicio require uno de estos roles ${roles}`
            })
        }

        next()
    }
}

module.exports = {
    isAdminRole,
    tieneRole
}