const Reservation = require('../model/reservation.model');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const { generateSign, verifyJwt} = require('../../jwt/jwt');

const getAllReservations = async (req, res, next) => {
    try {
        const allReservation = await Reservation.find().populate('userID').populate('guardianID').populate('ubicationID')
        return res.status(200).json(allReservation)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getReservation = async (req, res) => {
    try {
        const {id} = req.params;
        const oneReservation = await Reservation.findById(id);
        return res.status(200).json(oneReservation)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteReservation = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).json("Reservation deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postReservation = async (req, res, next) => {
    try {
        const {} = req.body;
        const newReservation = new Reservation(req.body);
        const createdReservation = await newReservation.save();
        return res.status(200).json(createdReservation) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}



const putReservation = async (req, res, next) => {
    try {
        const {id} = req.params;
        const reservation = new Reservation(req.body)
        reservation._id = id;
        const newReservation = await Reservation.findByIdAndUpdate(id,reservation, {new:true})
        return res.status(201).json(newReservation)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getAllReservations, deleteReservation, putReservation, postReservation, getReservation}