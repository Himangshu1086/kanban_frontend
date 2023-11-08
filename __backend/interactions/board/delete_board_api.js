
const Board  = require('../../db/models/boardSchema');


const deleteBoard = async (req,res)=>{
    try{
        const {id} = req.params;
        const isBoardExist = await Board.findOne({_id:id});
        if(!isBoardExist)
          return res.status(422).json({err:"Board doesn't exits"})
  
        await Board.deleteOne({_id:id})
        res.json({message:"Board deleted successfully"})
    }
    catch{
        err=> console.log(err)
    }
}


module.exports = {deleteBoard}