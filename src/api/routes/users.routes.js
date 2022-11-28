const express = require('express');
const {register, login, logout, getAllUsers, putUser, deleteUser, deleteAllUsers} = require('../controllers/users.controllers')
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/getall', getAllUsers)
router.post('/register', register)
router.post('/login', login)
router.post('/logout',[isAuth], logout)
router.put('/put/:id', putUser)
router.delete('/removeusers',[isAuth] ,deleteAllUsers)
router.delete('/deleteuser/:id',[isAuth], deleteUser)

module.exports = router;