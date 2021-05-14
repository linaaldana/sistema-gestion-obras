const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');
const authJwt = require('../middlewares');

router.get('/', usuarioController.getUsuarios);

router.post('/', usuarioController.createUsuario);

router.put('/:id', usuarioController.updateUsuarioById);

router.delete('/:id', usuarioController.deleteUsuarioById);

module.exports = router;
