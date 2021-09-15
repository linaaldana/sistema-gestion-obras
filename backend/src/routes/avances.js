const express = require('express');
const router = express.Router();
const avanceController = require('../controllers/avance.controller');


router.get('/', avanceController.getAvances);

router.get('/:id', avanceController.getAvanceById);

router.post('/', avanceController.createAvance);

router.put('/:id', avanceController.updateAvanceById);

router.delete('/:id', avanceController.deleteAvanceById);

module.exports = router;
