
const Column  = require('../../db/models/columnSchema');


const deleteColumn = async (req,res)=>{
    try{
        const {id} = req.params;
        const isColumnExist = await Column.findOne({_id:id});
        if(!isColumnExist)
          return res.status(422).json({err:"Column doesn't exits"})
  
        await Column.deleteOne({_id:id})
        res.json({message:"Column deleted successfully"})
    }
    catch{
        err=> console.log(err)
    }
}


module.exports = {deleteColumn}