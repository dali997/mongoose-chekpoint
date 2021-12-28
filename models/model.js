const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const personSchema = new Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    favoritefood: {type:Array,required:true}
});

const personDB = model('person',personSchema)
module.exports= personDB
