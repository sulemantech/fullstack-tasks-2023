const mongoose = require("mongoose");
const uri =
  "mongodb+srv://asf:Dev512@cluster0.kqc1xur.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };