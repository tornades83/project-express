import router from 'express'
import {listUser} from '../controllers/user.js'


const routerExpress = router()


routerExpress.get('/',listUser)


// module.exports=router

export default routerExpress 