const express = require('express');
const router = express.Router();
const upload = require("multer")();
const locationsCtrl = require('../../controllers/api/locations');

router.post('/create', upload.single('photo'), locationsCtrl.createLocation);
router.get('/', locationsCtrl.index);
router.get('/:id', locationsCtrl.detail);

module.exports = router;
