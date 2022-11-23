const Guardian = require('../model/guardian.model');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const { generateSign, verifyJwt} = require('../../jwt/jwt');

const getAllGuardians = async (req, res, next) => {
    try {
        const allGuardian = await Guardian.find()
        return res.status(200).json(allGuardian)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getGuardian = async (req, res) => {
    try {
        const {id} = req.params;
        const oneGuardian = await Guardian.findById(id);
        return res.status(200).json(oneGuardian)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteGuardian = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).json("Guardian deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postGuardian = async (req, res, next) => {
    try {
        const {} = req.body;
        const newGuardian = new Guardian(req.body);
        const createdGuardian = await newGuardian.save();
        return res.status(200).json(createdGuardian) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}



const putGuardian = async (req, res, next) => {
    try {
        const {id} = req.params;
        const guardian = new Guardian(req.body)
        guardian._id = id;
        const newGuardian = await Guardian.findByIdAndUpdate(id,guardian, {new:true})
        return res.status(201).json(newGuardian)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getAllGuardians, deleteGuardian, putGuardian, postGuardian, getGuardian}