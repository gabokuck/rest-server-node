const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario')

const validateJWT = async(req = request, resp = response, next) => {

    const token = req.header('x-token');

    if(!token){
       return resp.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);
        if(!usuario){
            return resp.status(401).json({
                msg: 'Token no válido - usuario no existe en DB'
            })
        }

        // Verificar si el uid tiene estado en true
        if(!usuario.estado){
            return resp.status(401).json({
                msg: 'Token no válido - usuario estado false'
            })
        }



        req.usuario = usuario;

        next();
        
    } catch (error) {
        console.log(error);
        resp.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validateJWT
}