const Ubication = require('../model/ubication.model');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const { generateSign, verifyJwt} = require('../../jwt/jwt');

const getAllUbications = async (req, res, next) => {
    try {
        const allUbication = await Ubication.find()
        return res.status(200).json(allUbication)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getUbication = async (req, res) => {
    try {
        const {id} = req.params;
        const oneUbication = await Ubication.findById(id);
        return res.status(200).json(oneUbication)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteUbication = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).json("Ubication deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postUbication = async (req, res, next) => {
    try {
        const {} = req.body;
        const newUbication = new Ubication(req.body);
        const createdUbication = await newUbication.save();
        return res.status(200).json(createdUbication) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}



const putUbication = async (req, res, next) => {
    try {
        const {id} = req.params;
        const ubication = new Ubication(req.body)
        ubication._id = id;
        const newUbication = await Ubication.findByIdAndUpdate(id,ubication, {new:true})
        return res.status(201).json(newUbication)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getAllUbications, deleteUbication, putUbication, postUbication, getUbication}