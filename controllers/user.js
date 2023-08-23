import { readFileSync, writeFileSync  } from 'fs'
import {successResponse,errorResponse} from '../utils.js'
import  { user } from '../models/users.js'
export const loadUsers = () => {
    const users = readFileSync("./data/users.json",'utf8')
    return JSON.parse(users)
}


export const listUsers = (req, res) => {
    try{
        const users = loadUsers();
        successResponse(res,users)
    }
    catch(e){
       errorResponse(res,'Error in load user')
    }
       
}

//Fonction pour recuperer tous les utilisateur de la base mongodb avec mongoose
export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find({});
    successResponse(res, 200, users);
  } catch (err) {
    console.error(err);
    errorResponse(res, 500, 'User not found.');
  }
};

// Fonction pour recuperer un utilisateur dans la base mongodb avec mongoose
export const getUsers = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await user.findById(userId);
    successResponse(res, 200, user);
  } catch (err) {
    errorResponse(res, 404, 'User not found.');
  }
};

export const updateUser = async (req, res) => {
  const userId = req.body.id;
  const updateData = { ...req.body };
  delete updateData.id; 

  try {
    const updateUser = await user.findOneAndUpdate({ id: userId }, updateData, { new: true });

    if (!updateUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur", error });
    console.error(error); // Afficher l'erreur et non l'utilisateur
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return error(res, 400, 'Identifiant non valide');
  }

  try {
    const deletedUser = await user.findByIdAndDelete(userId);

    if (!deletedUser) {
      return error(res, 404, 'Utilisateur non trouvé');
    }
    successResponse(res, 200, 'Utilisateur supprimé avec succès');
  } catch (e) {
    errorResponse(res, 500, 'Erreur serveur');
    console.error(e);
  }
};

  export const createUser = async (req, res) => {
    const payLoad = req.body
    try{
const newUser = await new user( payLoad).save();
  successResponse(res,newUser)   
}catch(e){
   errorResponse(res, e)
    }
  }
  
  export const checkAgeAndPhone = async (req, res) => {
   
    try {
      
      const {ageSup = 18, phone = true, operator= '$and'} = req.body;
     
      let query = { [operator]:[]
      };
      
query[operator].push({phone:{$exists:phone}})
 query[operator].push({age:{$gt:ageSup}})
 console.log("hello")
 console.log(query)
      const users = await user.find(query,{_id:0, firstName:1, lastName:1, age:1, phone:1});
      successResponse(res,  users);
    } catch (err) {
      errorResponse(res,  err);
    }
  };
  
  
  
  
  

  export const FilterByAgeBody = async (req, res) => {
    console.log("hello")
    try {
        const {$gt, $lt} = req.body;
        console.log($gt, $lt);
        const users = await user.find({age: {$exists: true}},{_id:0, firstName:1, lastName:1, age:1, phone:1});
        successResponse(res,  users);
      } catch (err) {
        console.error(err);
        errorResponse(res,  'User not found.');
      }
    };