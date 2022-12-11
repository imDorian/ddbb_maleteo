
const express = require('express');
const {connect} = require('./src/utils/database')
const morgan = require('morgan');

const {Server} = require('socket.io')
const Socketserver = Server;

 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');

const usersRouter= require('./src/api/routes/users.routes')
const ubicationsRouter = require('./src/api/routes/ubications.routes')
const guardiansRouter = require('./src/api/routes/guardians.routes')
const reservationsRouter= require('./src/api/routes/reservations.routes')
const chatsRouter= require('./src/api/routes/chats.routes')


const {isAuth} = require('./src/middlewares/auth');
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
app.use('/chats', chatsRouter)

const io = new Server (server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  });

server.listen(PORT, () => console.log(`listening http://localhost:${PORT}`))