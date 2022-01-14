const { Router } = require('express')
const { check } = require('express-validator')
const { usuariosGet,usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios')

const { isRoleValide, emailExist, isExistUserByID } = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validarCampos')

const router = Router()

router.get('/', usuariosGet )

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(isExistUserByID),
    check('rol').custom(isRoleValide),
    validarCampos
],usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe de ser mayor a 6 letras').isLength({min:6}),
    check('correo').custom(emailExist),
    // check('rol', 'No es un rol válido').isIn('ADMIN_ROLE', 'USER_ROLE'),
    check('rol').custom(isRoleValide),
    validarCampos
],usuariosPost)

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(isExistUserByID),
    validarCampos
],usuariosDelete)

module.exports = router