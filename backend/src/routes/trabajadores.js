const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajadores.controller');


router.get('/', trabajadorController.getTrabajadores);

router.get('/:id', trabajadorController.getTrabajadorById);

router.post('/', trabajadorController.createTrabajador);

router.put('/:id', trabajadorController.updateTrabajadorById);

router.delete('/:id', trabajadorController.deleteTrabajadorById);

module.exports = router;
