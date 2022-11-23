const mongoose = require('mongoose');
const Ubication = require('../api/model/ubicationes');
const dotenv = require('dotenv')

const DB_URL = process.env.MONGO_DB


const ubications = [
   { 
    latitude:20 ,
    longitude:20 ,
    images:"",
    name:"madrid, madrid" ,
    disponibility: true ,
    description: "helloooooo",
   }
];
const ubicationDocuments = ubicationes.map(ubication => new Ubication(ubication));
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allubicationes = await Ubication.find();
    if (allubicationes.length) {
      await Ubication.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Ubication.insertMany(ubicationDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());