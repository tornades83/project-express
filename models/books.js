import {Schema, model} from 'mongoose'



 export const books = new Schema({
    id:{ type: Number, min: 1, index: true },
    author: { type: String, default: 'hahaha' },
    titre: { type: String, default: 'hahaha' },
    price: { type: Number, min: 1, index: true },
    publication: { type: String, default: 'hahaha' },
    description:  { type: String, default: 'hahaha' },
    types:  { type: String, default: 'hahaha' },
    date: { type: Date, default: Date.now },
    buff: Buffer
  });
  const booksModel =new model('book',books)


 
  module.exports = booksModel;