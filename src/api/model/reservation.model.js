const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const ReservationSchema = new Schema({


    userID:{type: Schema.Types.ObjectId, ref:"user"},
    guardianID:{type: Schema.Types.ObjectId, ref:"guardian"},
    ubicationID: {type: Schema.Types.ObjectId, ref:"ubication"},
    inDate:{type: String, required: true},
    outDate:{type: String, required: true},
    baggageNumber:{type: Number, required: true},
    price:{type: Number, required: true},
    pending: {type: Boolean, required: true},
    
    
});


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;