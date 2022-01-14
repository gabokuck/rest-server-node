
const validarCampos  = require('../middlewares/validarCampos')
const validateJWT = require('../middlewares/validarjwt')
const validaRoles = require('../middlewares/validarRoles')

module.exports = {
    ...validarCampos,
    ...validateJWT,
    ...validaRoles
}