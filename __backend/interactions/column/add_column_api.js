//import models
const Column  = require('../../db/models/columnSchema');


const addColumn = async (req, res) => {
  try{
      const {name , board} = req.body;
      const isColumnExist = await Column.findOne({name:name});
      if(isColumnExist)
        return res.status(422).json({err:"Column exits already"})


      const new_Column = new Column({
        name:name,
        board:board
      });
      await new_Column.save();

      res.status(200).json({ message:"Column added successfully" })
  }
  catch{
    err =>{
      console.log(err)
    }
  }
};

module.exports = { addColumn };

