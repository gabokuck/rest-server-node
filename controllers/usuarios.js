const { request ,response } = require('express')

const usuariosGet = (req = request, res = response) => {

    const params = req.query

    res.json({
        msg: 'get API - controlador',
        params
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params

    res.json({
        msg: 'post API - controlador',
        id
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body

    res.json({
        msg: 'put API - controlador',
        nombre,
        edad
    })
}


const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}