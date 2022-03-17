const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username : {
        type:String,
        unique:true,
        required:true
    },
    password : {
        type: String,
        unique:true,
        required:true
    }
})


module.exports = mongoose.model("User", userSchema);