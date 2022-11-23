const mongoose = require('mongoose');
const Comunidad = require('../api/model/comunidades');
//const dotenv = require('dotenv')

const guardians = [

];
const comunidadDocuments = comunidades.map(comunidad => new Comunidad(comunidad));
mongoose
  .connect('mongodb+srv://root:root@cluster0.54md9ja.mongodb.net/project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allComunidades = await Comunidad.find();
    if (allComunidades.length) {
      await Comunidad.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Comunidad.insertMany(comunidadDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());