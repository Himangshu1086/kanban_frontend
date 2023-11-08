//import models
const Board  = require('../../db/models/boardSchema');
const Column = require('../../db/models/columnSchema')

const addBoard = async (req, res) => {
  try{
      const {name , description} = req.body;
      const isBoardExist = await Board.findOne({name:name});
      if(isBoardExist)
        return res.status(422).json({err:"Board exits already"})

      const new_board = new Board({
        name:name,
        description:description
      });
      await new_board.save();

      const currentBoard = await Board.findOne({name:name})
      const board = currentBoard._id
      // add 3 column for the board 
      await new Column({
        name:"To Do",
        board:board
      }).save()
      await new Column({
        name:"In Progress",
        board:board
      }).save()
      await new Column({
        name:"Completed",
        board:board
      }).save()

      
      res.status(200).json({ message:"Board added successfully" })
  }
  catch{
    err =>{
      console.log(err)
    }
  }
};

module.exports = { addBoard };

