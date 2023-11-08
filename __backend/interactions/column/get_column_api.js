//import models

const Column = require("../../db/models/columnSchema");

const getColumn = async (req, res) => {
    try{
      const Columns = await Column.find();
      res.status(200).json({Columns});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };


  const getColumnByBoardId = async (req, res) => {
    try{
      const {boardid} = req.params;
      const Columns = await Column.find({board:boardid});
      res.status(200).json({Columns});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  
  module.exports = { getColumn ,getColumnByBoardId};
  