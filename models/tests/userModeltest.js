const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log("DB Connected")
    })
    .catch((err) => {
        console.log(err)
    })

let user = require("../usermodel")
let { model, schema } = user

async function createUser() {
    let data = await model.create({
        name: "new",
        psswd: "new"
    })
}

async function showUsers() {
    let data = await model.find({})
    console.log(data)
}


// createUser()
// showUsers()

async function schemaPaths(){
    let paths = await schema.paths
    // console.log(Object.keys(paths))
    let x = Object.values(paths)
    console.log(x[5].instance)
}
schemaPaths()


