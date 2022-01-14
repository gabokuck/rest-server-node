const Usuario = require('../models/usuario')
const Role = require('../models/role')

const isRoleValide = async( rol = '' ) => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${ rol } no está registrado en la DB`)
    }
}

const emailExist = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
        throw new Error(`El correo ${correo} ya se encuentra registrado`);
    }
}

const isExistUserByID = async(id) => {
    const isExistUser = await Usuario.findById(id)
    if(!isExistUser){
        throw new Error(`El id ${id} no esta registrado en la DB`);
    }
}

module.exports = {
    isRoleValide,
    emailExist,
    isExistUserByID
}