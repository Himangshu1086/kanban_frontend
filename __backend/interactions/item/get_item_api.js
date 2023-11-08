//import models

const Item = require("../../db/models/boardItemSchema");

const getItem = async (req, res) => {
    try{
      const Items = await Item.find();
      res.status(200).json({Items});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  
  const getItemByBoardId = async (req, res) => {
    try{
      const {boardid} = req.params;
      const Items = await Item.find({board:boardid});
      res.status(200).json({Items});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };


  const getItemByColumnId = async (req, res) => {
    try{
      const {columnid} = req.params;
      const itemData = await Item.find({column:columnid});
      res.status(200).json({itemData});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };




  module.exports = { getItem ,getItemByBoardId , getItemByColumnId};
  