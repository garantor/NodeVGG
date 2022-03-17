const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String
    },
    complete:{
        type:Boolean,
        required:true
    },
    action:{
        //this is related to the action model
    }
})


module.exports = mongoose.model("Project", projectSchema);
