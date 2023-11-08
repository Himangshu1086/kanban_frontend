
const mongoose = require("mongoose")

const boardSchema =  new mongoose.Schema({

    name:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
        required:true
    }
},
{timestamps:true}

)

const Board  = mongoose.models.board  ||  mongoose.model('board' ,boardSchema);

module.exports = Board;