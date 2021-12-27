const mongoose = require('mongoose')
const express = require('express');
const connectDB = require('./DB/connectDB');
const personDB = require('./models/model')
const app = express();


//new Doc new Client 

const customer = new personDB({name:"mohsen",age:50,favoritefood:["lazania","kosksi"]});
customer.save((err)=>{
   if(err) return console.log(err)
} )
 
//saved
// find all 
const findAll = async()=>{
    const data = await PersonDB.find();
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
        const data = await personDB.findById({_id:'61c9a9ab1f8b3f442f525c49'});
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// SearchById()
//--find/edit/save
const FindEditSave=async()=>{
    var chawarma='chawarma'
    await Person.findById({_id:'61b8b7f731c2b94fd1fb5efa'},(error,result)=>{
        if(error){
            console.log(error)
        }else{
            result.favoriteFoods.push(chawarma)
            result.save((error,update)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(update)
                }
            })
        }
    })
}

//FindEditSave()
//Update 




const query = {name:"mohsen"};
const Updated = async ()=>{
    const data = await personDB.findOneAndUpdate(query,{name:"jhon",favoritefoods :["chawarma","djej"],age:23},(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })
}

// Updated()
//FindOne And Delete

const userDeleted = {name:"mohsen"}
const Delete = async()=>{
    const delData = await personDB.findOneAndDelete({_id:"61c9c7845c1fe729dc956152"},(data,err)=>{
        try {
            console.log("data deleted")
        } catch (err) {
            console.log(err)
        }
    })
}

// Delete()

const mohsen={name:'mohsen'}
const mohsenDelete= async()=>{
    await PersonDB.deleteMany(mohsen,(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })
}
//mohsenDelete()

//chain search//

const Search = {favoriteFood:"chappati"};
const queryChain = async()=>{

         Person.find(Search)
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
  //queryChain()
connectDB()
const PORT = 5000 ;

app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}` )
})