//import models

const Board = require("../../db/models/boardSchema");

const updateBoard = async (req, res) => {
      try{
        const {id,name,description} = req.body;
        const isBoardExist = await Board.findOne({_id:id});
        if(!isBoardExist)
          return res.status(422).json({err:"Board doesn't exits"})

        await Board.updateOne({name:name,description:description})
        
        res.json({message:"Board updated successfully"})
    }
    catch{
        err=> console.log(err)
    }
  };
  
  module.exports = { updateBoard };
  