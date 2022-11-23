const express = require('express');
const {getAllGuardians, deleteGuardian, putGuardian, postGuardian, getGuardian}= require('../controllers/guardians.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllGuardians);
router.get('/get/:id', getGuardian);
router.post('/post', postGuardian);
router.put('/put/:id',putGuardian);
router.delete('/delete/:id', deleteGuardian);

module.exports = router;