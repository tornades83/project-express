import { readFileSync, writeFileSync  } from 'fs'
import {successResponse,errorResponse} from '../utils.js'
import  { book } from '../models/books.js'
export const loadBooks = () => {
    const books = readFileSync("./data/books.json",'utf8')
    return JSON.parse(books)
}


export const listBooks = (req, res) => {
    try{
        const books = loadBooks();
        successResponse(res,books)
    }
    catch(e){
       errorResponse(res,'Error in load book')
    }
       
}

//Fonction pour recuperer tous les utilisateur de la base mongodb avec mongoose
export const getAllBooks = async (req, res) => {
  try {
    const books = await book.find({});
    successResponse(res, 200, books);
  } catch (err) {
    console.error(err);
    errorResponse(res, 500, 'book not found.');
  }
};

// Fonction pour recuperer un utilisateur dans la base mongodb avec mongoose
export const getBooks = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await book.findById(bookId);
    successResponse(res, 200, book);
  } catch (err) {
    errorResponse(res, 404, 'book not found.');
  }
};

export const updateBook = async (req, res) => {
  const bookId = req.body.id;
  const updateData = { ...req.body };
  delete updateData.id; 

  try {
    const updateBook = await book.findOneAndUpdate({ id: bookId }, updateData, { new: true });

    if (!updateBook) {
      return res.status(404).json({ message: 'book non trouvé' });
    }

    res.status(200).json(updateBook);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de book", error });
    console.error(error); // Afficher l'erreur et non l'utilisateur
  }
};

export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    return error(res, 400, 'book non valide');
  }

  try {
    const deleteBook = await book.findByIdAndDelete(bookId);

    if (!deleteBook) {
      return error(res, 404, 'book non trouvé');
    }
    successResponse(res, 200, 'book supprimé avec succès');
  } catch (e) {
    errorResponse(res, 500, 'Erreur serveur');
    console.error(e);
  }
};

  export const createBook = async (req, res) => {
    const payLoad = req.body
    try{
const newbook = await new book( payLoad).save();
  successResponse(res,newbook)   
}catch(e){
   errorResponse(res, e)
    }
  }
  
//   export const checkTitreAndPhone = async (req, res) => {
   
//     try {
      
//       const {ageSup = 18, phone = true, operator= '$and'} = req.body;
     
//       let query = { [operator]:[]
//       };
      
// query[operator].push({phone:{$exists:phone}})
//  query[operator].push({age:{$gt:ageSup}})
//  console.log("hello")
//  console.log(query)
//       const books = await book.find(query,{_id:0, firstName:1, lastName:1, age:1, phone:1});
//       successResponse(res,  books);
//     } catch (err) {
//       errorResponse(res,  err);
//     }
//   };
  
  
  
  
  

  // export const FilterByAgeBody = async (req, res) => {
  //   console.log("hello")
  //   try {
  //       const {$gt, $lt} = req.body;
  //       console.log($gt, $lt);
  //       const books = await book.find({age: {$exists: true}},{_id:0, firstName:1, lastName:1, age:1, phone:1});
  //       successResponse(res,  books);
  //     } catch (err) {
  //       console.error(err);
  //       errorResponse(res,  'book not found.');
  //     }
  //   };