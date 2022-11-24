const express = require('express');
const {connect} = require('./src/utils/database')
const usersRouter= require('./src/api/routes/users.routes')
const ubicationsRouter= require('./src/api/routes/ubications.routes')
const guardiansRouter= require('./src/api/routes/guardians.routes')
const reservationsRouter= require('./src/api/routes/reservations.routes')
const {isAuth} = require('./src/middlewares/auth');
//const provinciasRouter= require('./src/api/routes/pais.routes')
const dotenv = require('dotenv');
const app = express()

dotenv.config();
const PORT = process.env.PORT || 8000;

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/guardians', guardiansRouter)
app.use('/users', usersRouter)
app.use('/ubications', ubicationsRouter)
app.use('/guardians', guardiansRouter)
app.use('/reservations', reservationsRouter)


app.listen(PORT,()=>console.log(`listening http://localhost:${PORT}`))