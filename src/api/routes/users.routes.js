const express = require('express');
const {register, login, logout, getAllUsers, getUser, putUser, deleteUser, deleteAllUsers} = require('../controllers/users.controllers')
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllUsers)
router.get('/get/:id', getUser)
router.post('/register', register)
router.post('/login', login)
router.post('/logout',[isAuth], logout)
router.put('/put/:id', putUser)
router.delete('/removeusers',[isAuth] ,deleteAllUsers)
router.delete('/deleteuser/:id',[isAuth], deleteUser)

module.exports = router;