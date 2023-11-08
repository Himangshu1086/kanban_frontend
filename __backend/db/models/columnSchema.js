const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;


const columnSchema =  new mongoose.Schema({

    name:{
        type:String
    },
    board:{
        type:ObjectId,
        required:true
    }
},
{timestamps:true}

)

const Column  = mongoose.models.column  ||  mongoose.model('column' ,columnSchema);

module.exports =  Column;