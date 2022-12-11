const express = require('express');
const {getAllChats, deleteChat, putChat, postChat, getChat}= require('../controllers/chats.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllChats);
router.get('/get/:id', getChat);
router.post('/post', postChat);
router.put('/put/:id',putChat);
router.delete('/delete/:id', deleteChat);

module.exports = router;