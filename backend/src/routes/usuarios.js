const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');


router.get('/', usuarioController.getUsuarios);

router.get('/:id', usuarioController.getUsuarioById);

router.post('/', usuarioController.createUsuario);

router.put('/:id', usuarioController.updateUsuarioById);

router.delete('/:id', usuarioController.deleteUsuarioById);

module.exports = router;
