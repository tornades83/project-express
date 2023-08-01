import router from 'express'
import { deleteBook, getBooks, listBooks, updateBook } from '../controllers/book.js'


const routerExpress = router()


routerExpress.get('/', listBooks)
routerExpress.get('/',listBooks)
routerExpress.get('/:id', getBooks)
routerExpress.put("/:id", updateBook) 
routerExpress.delete("/:id", deleteBook)

export default routerExpress
// module.exports= router

// MVC  => model view controller