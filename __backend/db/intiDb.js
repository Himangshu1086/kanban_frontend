
const mongoose = require('mongoose')


const DB = 'mongodb+srv://baishyahimangshu499:himangshu_123@cluster0.1col81h.mongodb.net/';

mongoose.connect( DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to mongo');
}).catch((err)=>{
    console.log('error connecting' ,err)
})