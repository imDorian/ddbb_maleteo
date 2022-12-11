const Chat = require('../model/chat.model');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const { generateSign, verifyJwt} = require('../../jwt/jwt');

const getAllChats = async (req, res, next) => {
    try {
        const allChat = await Chat.find();
        return res.status(200).json(allChat)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getChat = async (req, res) => {
    try {
        const {id} = req.params;
        const oneChat = await Chat.findById(id).populate({path:'body'});
        return res.status(200).json(oneChat)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteChat = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await Chat.findByIdAndDelete(id);
        return res.status(200).json("Chat deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postChat = async (req, res, next) => {
    try {
        const {} = req.body;
        const newChat = new Chat(req.body);
        const createdChat = await newChat.save();
        return res.status(200).json(createdChat) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}



const putChat = async (req, res, next) => {
    try {
        const {id} = req.params;
        const chat = new Chat(req.body)
        chat._id = id;
        const newChat = await Chat.findByIdAndUpdate(id,chat, {new:true})
        return res.status(201).json(newChat)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getAllChats, deleteChat, putChat, postChat, getChat}