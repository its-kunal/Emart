let mongoose = require("mongoose")
let addressSchema = new mongoose.Schema({
    stAdd: { type: String },
    landmark: { type: String },
    city: { type: String },
    country: { type: String },
    pincode: { type: Number }
})

module.exports = addressSchema