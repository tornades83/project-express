import {loadUsers} from "../controllers/user.js"
import { errorResponse } from "../utils.js"

export const auth = (req,res,next) => {
    const {password} = req.headers
    const {id} = req.params
    const users = loadUsers()
    const userExistAuthentification = users.find((user) => user.id == id && user.password == password)
    if(userExistAuthentification){
        req.user = userExistAuthentification
 next()
    }
    else errorResponse(res, 'you need authentification',401)
} 
    