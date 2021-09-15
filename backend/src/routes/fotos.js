const express = require('express');
const router = express.Router();
const fotoController = require('../controllers/foto.controller');
const multer  = require('multer') 
const upload = multer();

router.get('/', fotoController.getPhotos);

router.get('/:id', fotoController.getPhotoById);

router.post('/', upload.single('imageBlob'), fotoController.createPhoto);

router.delete('/:id', fotoController.deletePhotoById);

module.exports = router;
