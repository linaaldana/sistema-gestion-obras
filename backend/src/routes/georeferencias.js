const express = require('express');
const router = express.Router();
const georeferenciaController = require('../controllers/georeferencia.controller');

router.get('/', georeferenciaController.getGeoreferences);

router.get('/:id', georeferenciaController.getGeoreferenceById);

router.post('/', georeferenciaController.createGeoreference);

router.put('/:id', georeferenciaController.updateGeoreferenceById);

router.delete('/:id', georeferenciaController.deleteGeoreferenceById);

module.exports = router;
