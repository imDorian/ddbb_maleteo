const express = require('express');
const {getAllUbications, deleteUbication, putUbication, postUbication, getUbication} = require('../controllers/ubications.controllers')
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.post('/post', postUbication)
router.put('/put/:id', putUbication)
router.delete('/delete/:id', deleteUbication)
router.get('/getubication/:id', getUbication)
router.get('/getallubications', getAllUbications)


module.exports = router;