//import models

const Column = require("../../db/models/columnSchema");

const updateColumn = async (req, res) => {
      try{
        const {id,name,board} = req.body;
        const isColumnExist = await Column.findOne({_id:id});
        if(!isColumnExist)
          return res.status(422).json({err:"Column doesn't exits"})

        await Column.updateOne({name:name,board:board})
        
        res.json({message:"Column updated successfully"})
    }
    catch{
        err=> console.log(err)
    }
  };
  
  module.exports = { updateColumn };
  