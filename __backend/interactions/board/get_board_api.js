//import models

const Board = require("../../db/models/boardSchema");

const getBoard = async (req, res) => {
    try{
      const boards = await Board.find();
      res.status(200).json({boards});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  

  const getBoardById = async(req,res) =>{
    try{
      const {id} = req.params;
      const board = await Board.findOne({_id:id})
      res.status(200).json({board})
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  }



  module.exports = { getBoard ,getBoardById};
  