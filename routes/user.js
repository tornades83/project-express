import router from 'express'
import {createUser, deleteUser, getUsers, listUsers, updateUser, FilterByAgeBody, getAllUsers ,checkAgeAndPhone} from '../controllers/user.js'
// import {auth} from '../middlewares/auth.js'
// import { timeOfMyRequest } from '../middlewares/time.js'

const routerExpress = router()

routerExpress.get('/filterbyagebody', FilterByAgeBody)
routerExpress.get('/',listUsers)
routerExpress.get('/:id', getUsers)
// routerExpress.get('/', getAllUsers)
routerExpress.put("/:id",  updateUser) 
routerExpress.delete("/:id", deleteUser)
routerExpress.post('/', createUser )
routerExpress.post('/checkAgeAndPhone', checkAgeAndPhone )

// module.exports=router

export default routerExpress 