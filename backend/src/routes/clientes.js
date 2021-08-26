const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientes.controller');


router.get('/', clienteController.getClientes);

router.get('/:id', clienteController.getClienteById);

router.post('/', clienteController.createCliente);

router.put('/:id', clienteController.updateClienteById);

router.delete('/:id', clienteController.deleteClienteById);

module.exports = router;
