const mongoose = require('mongoose')
const express = require('express');
const connectDB = require('./DB/connectDB');
const personDB = require('./models/model')
const app = express();
// var id = mongoose.Types.ObjectId('61b8b7f731c2b94fd1fb5efa');

//new Doc new Client 

// const customer = new personDB({name:"yesmine",age:14,favoritefood:["chappati","ma9rouna"]});
// customer.save((err)=>{
//    if(err) return console.log(err)
// } )
 
//saved
// find all 
const findAll = async()=>{
    const data = await personDB.find();
    try {
        
      console.log((data))
    } catch (err) {
        console.log((err))
    }
}
// findAll()

//find one data

const Search = async ()=>{
    try{
        const data = await personDB.find({name:'mohsen'});
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


// Search()

// find by id
const SearchById = async ()=>{
    try{
        const data = await personDB.findById({_id:'61cad70deae12a93621ff84c'});
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// SearchById()



// --find/edit/save

// personDB.findOne({_id: "61cad70deae12a93621ff84c"}, function (err, user) {
//     user.name = "nader";
//     user.age = 21;
//     user.favoritefood = ['bozjaz',"cuscisz"];

//     user.save(function (err) {
//         if(err) {
//             console.error('ERROR!');
//         }
//     });
// });




// const query =;
const Update = async ()=>{
 const data =await personDB.findOneAndUpdate( {name:"jhon"},{name:"nader",favoritefood:["hgdascdaz","hazdhazxdx"],age:23},(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
       
    }).clone()
    
}

// Update()
//FindOne And Delete

const userDeleted = {name:"mohsen"}
const Delete = async()=>{
    const delData = await personDB.findOneAndDelete(userDeleted,(data,err)=>{
        try {
            console.log("data deleted")
        } catch (err) {
            console.log(err)
        }
    }).clone()
}
 
// Delete()

const x={name:'nader'}
const daliDelete= async()=>{
    await personDB.deleteMany(x,(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }).clone()
}
// daliDelete()

//chain search//

const dali = {favoriteFood:"chappati"};
const queryChain = async()=>{

         personDB.find(dali)
               .sort({name :1})
               .limit(2)
               .select({age:0})
               .exec()
     .then (doc=>{
         console.log(doc)
         
     })
      .catch (err=> {
       console.error(err)
        
     })
      
        
  };
  queryChain()
connectDB()
const PORT = 5000 ;

app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}` )
})