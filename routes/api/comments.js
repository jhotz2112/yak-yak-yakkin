const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

router.post('/:id/comments', commentsCtrl.create);
// router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);
// router.get('/comments/:id/edit', isLoggedIn, commentsCtrl.edit);
// router.put('/comments/:id', isLoggedIn, commentsCtrl.update);

module.exports = router;