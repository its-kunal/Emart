let mongoose = require("mongoose")
let bcrypt = require("bcrypt")
let { v4: uuidV4 } = require("uuid")
let addressSchema = require("./addressSchema")


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
    address: [addressSchema]
})

userSchema.post(["create", "save"], async function (next) {
    this.psswd = await bcrypt.hashSync(this.psswd, 5)
    this.userId = uuidV4()
})

let userModel = mongoose.model("user", userSchema)

module.exports = { model: userModel, schema: userSchema }
