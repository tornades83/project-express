import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    id:{ bsonType:"objecId",required:true  },
    author: {type:String, default:""},
    titre: {type:String, default:""},
    price: {type:Number, default:0},
    rentBy: {
      type:[mongoose,Schema.Type.ObjectId],
      ref: "user"
    },
    publication: {type:String, default:""},
    description:  {type:String, default:""},
    types:  {type:String, default:""},
    date: { type: Date, default: Date.now },
    buff: Buffer
  });
  export const book = mongoose.model('book', bookSchema, 'books');
  export default book;