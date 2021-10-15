let mongoose = require("mongoose")
let bcrypt = require("bcrypt")

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 1
    },
    psswd: {
        type: String
    },
    userId: {
        type: String,
        unique: true
    },
    age: {
        type: Date
    },
    gender: {
        type: String,

    },
    sessionId: [{ type: String }],
    address: [{
        stAdd: { type: String },
        landmark: { type: String },
        city: { type: String },
        country: { type: String },
        pincode: { type: Number }
    }]
})


userSchema.pre(["create", "save"], async function (next) {
    let hash = await bcrypt.hashSync(psswd, 5)
    psswd = hash
    next()
})
