const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const ReservationSchema = new Schema({

    userID:{type: Schema.Types.ObjectId, ref:"User"},
    guardianID:{type: Schema.Types.ObjectId, ref:"Guardian"},
    ubicationID: {type: Schema.Types.ObjectId, ref:"Ubication"},
    inDate:{type: Date, required: true},
    outDate:{type: Date, required: true},
    baggageNumber:{type: Number, required: true},
    price:{type: Number, required: true},
    isConfirmed: {type: Boolean, default:false, required: true},
    
},{
    timestamps: true
    });


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;