//import models
const Item  = require('../../db/models/boardItemSchema');


const addItem = async (req, res) => {
  try{
      const {name , description , dueDate, column, board } = req.body;
      const new_Item = new Item({
        name:name,
        description:description,
        dueDate: dueDate,
        column: column,
        board: board
      });
      await new_Item.save();

      res.status(200).json({ message:"Item added successfully" })
  }
  catch{
    err =>{
      console.log(err)
    }
  }
};

module.exports = { addItem };

