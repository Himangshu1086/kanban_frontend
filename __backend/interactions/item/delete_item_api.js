
const Item  = require('../../db/models/boardItemSchema');


const deleteItem = async (req,res)=>{
    try{
        const {id} = req.params;
        const isItemExist = await Item.findOne({_id:id});
        if(!isItemExist)
          return res.status(422).json({err:"Item doesn't exits"})
  
        await Item.deleteOne({_id:id})
        res.json({message:"Item deleted successfully"})
    }
    catch{
        err=> console.log(err)
    }
}


module.exports = {deleteItem}