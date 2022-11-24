const express = require('express');
const {getAllReservations, deleteReservation, putReservation, postReservation, getReservation}= require('../controllers/reservations.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllReservations);
router.get('/get/:id', getReservation);
router.post('/post', postReservation);
router.put('/put/:id',putReservation);
router.delete('/delete/:id', deleteReservation);

module.exports = router;