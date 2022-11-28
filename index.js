const express = require('express');
const {connect} = require('./src/utils/database')

const usersRouter= require('./src/api/routes/users.routes')
const ubicationsRouter= require('./src/api/routes/ubications.routes')
const guardiansRouter= require('./src/api/routes/guardians.routes')
const reservationsRouter= require('./src/api/routes/reservations.routes')

const {isAuth} = require('./src/middlewares/auth');
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

dotenv.config();
const PORT = process.env.PORT || 8000;

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter)
app.use('/ubications', ubicationsRouter)
app.use('/guardians', guardiansRouter)
app.use('/reservations', reservationsRouter)

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => console.log(`listening http://localhost:${PORT}`))