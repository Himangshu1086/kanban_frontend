//import models

const Item = require("../../db/models/boardItemSchema");

const updateItem = async (req, res) => {
      try{
        const {id, name , description , dueDate } = req.body;
        const isItemExist = await Item.findOne({_id:id});
        if(!isItemExist)
          return res.status(422).json({err:"Item doesn't exits"})

        await Item.findOneAndUpdate({_id:id},{name:name,description:description,dueDate:dueDate})
        
        res.json({message:"Item updated successfully"})
    }
    catch{
        err=> console.log(err)
    }
  };
  
  module.exports = { updateItem };
  