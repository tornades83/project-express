
import  express  from "express";
import cors from 'cors'
import morgan from "morgan";
import routes from './routes/index.js'
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://meirroos:Ad5TUtBd8gVQieuv@clusterwebscool.cv7grk6.mongodb.net/library',
 {useNewUrlParser: true,
  useUnifiedTopology:true}) 
  .then(() => console.log('sucess!'))
  .catch(() => console.log("error!"))
  

  



const PORT = 80;

var app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())

app.use('/api' , routes)

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})  
  







