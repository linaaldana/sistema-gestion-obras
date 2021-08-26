const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obras.controller');


router.get('/', obraController.getObras);

router.get('/:id', obraController.getObraById);

router.post('/', obraController.createObra);

router.put('/:id', obraController.updateObraById);

router.delete('/:id', obraController.deleteObraById);

module.exports = router;
