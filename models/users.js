import {Schema, model} from 'mongoose'



 export const users = new Schema({
    id:{ type: Number, min: 1, index: true },
    firstName: { type: String, default: 'hahaha' },
    lastName: { type: String, default: 'hahaha' },
    password:{ type: String, default: '12345' },
    age: { type: Number, min: 1, index: true },
    email: { type: String, default: 'name@mail.com' },
    phone:{ type: Number, min: 1, index: true },
    role:  { type: String, default: 'hahaha' },
    date: { type: Date, default: Date.now },
    buff: Buffer
  });
  const usersModel =new model('user',users)


 
  module.exports = usersModel;