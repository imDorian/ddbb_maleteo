const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const UbicationSchema = new Schema({
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    images: {type: Array, required: true},
    name: {type: String, required: true},
    disponibility: {type: String},
    description: {type: String, required: true},
    guardianID:{type: Schema.Types.ObjectId, ref:"guardian"},
    
},{
    timestamps: true
    });


const Ubication = mongoose.model('Ubication', UbicationSchema);

module.exports = Ubication;