const express = require('express');
const router = express.Router();
const vozController = require('../controllers/voz.controller');
const multer  = require('multer') 
const upload = multer();

router.get('/', vozController.getAudios);

router.get('/:id', vozController.getAudioById);

router.post('/', upload.single('soundBlob'), vozController.createAudio);

router.delete('/:id', vozController.deleteAudioById);

module.exports = router;
