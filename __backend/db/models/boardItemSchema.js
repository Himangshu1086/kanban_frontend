const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;


const boardItemSchema =  new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    dueDate:{
        type:Date
    },
    column:{
        type:ObjectId,
        ref:"column",
        required:true
    },
    board:{
        type:ObjectId,
        ref:"board",
        require:true
    }
},
{timestamps:true}

)

const BoardItem  = mongoose.models.boardItem  ||  mongoose.model('boardItem' ,boardItemSchema);

module.exports =  BoardItem;