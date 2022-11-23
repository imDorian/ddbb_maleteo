const mongoose = require('mongoose');
const Pais = require('../api/model/pais.model');
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = process.env.MONGO_DB

const users = [
  {
    name: 'admin',
    surname: 'admin',
    password: 'admin',
    email: 'admin@admin.com',
  },
  {
    name: 'admin2',
    surname: 'admin2',
    password: 'admin2',
    email: 'admin2@admin.com',
  },
  {
    name: 'admin3',
    surname: 'admin3',
    password: 'admin3',
    email: 'admin3@admin.com',
  },
  {
    name: 'admin4',
    surname: 'admin4',
    password: 'admin4',
    email: 'admin4@admin.com',
  },
]
   
  

const userDocuments = users.map(user => new User(user));
mongoose
  .connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allUsers = await User.find();
    if (allUsers.length) {
      await Users.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await User.insertMany(userDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());