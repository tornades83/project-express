import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  
  firstName: {type:String, default:""},
  lastName: {type:String, default:""},
  email: {type:String, required:false},
  password: {type:String},
  age: {type:Number, default:0},
  phone: {type:String, default:""},
  type: {type:[String]},
});

export const user = mongoose.model('User', userSchema, 'Users');

export default user;
//  export const user = new Schema({
//     id:{ bsonType:"objecId",required:true  },
//     firstName: { type: String, default: ' ' },
//     lastName: { type: String, default: ' ' },
//     password:{ type: String, default: ' ' },
//     age: { type: Number, default: 0 },
//     email: { type: String, default: ' ' },
//     phone: { type: Number, default: 0 },
//     role:  { type: String, default: ' ' },
//     date: { type: Date, default: Date.now },
//     buff: Buffer
//   });
//   const usersModel =new model('user',users)


 
//   module.exports = usersModel;