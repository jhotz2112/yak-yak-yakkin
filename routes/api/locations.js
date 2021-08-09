const express = require('express');
const router = express.Router();
const locationsCtrl = require('../../controllers/api/locations');

router.post('/create', locationsCtrl.createLocation);
router.post('/history', locationsCtrl.history);

module.exports = router;