const express = require('express');
const router = express.Router();
const upload = require("multer")();
const locationsCtrl = require('../../controllers/api/locations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, upload.single('photo'), locationsCtrl.createLocation);
router.get('/', locationsCtrl.index);
router.get('/key', locationsCtrl.getKey)
router.get('/:id', ensureLoggedIn, locationsCtrl.detail);
router.delete('/:id', ensureLoggedIn, locationsCtrl.deleteOne);
router.put('/:id', ensureLoggedIn, locationsCtrl.updateOne);

module.exports = router;
