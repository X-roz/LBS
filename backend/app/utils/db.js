const mongoose=require('mongoose')

const loadDbURI='mongodb://localhost:27017/loadDb';
const truckDbURI='mongodb://localhost:27017/truckDb';


mongoose.loadDb=mongoose.createConnection(loadDbURI,{useNewUrlParser:true , useUnifiedTopology:true})


mongoose.truckDb=mongoose.createConnection(truckDbURI,{useNewUrlParser:true , useUnifiedTopology:true})

module.exports=mongoose;