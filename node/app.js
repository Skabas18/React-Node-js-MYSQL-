import  express  from "express";
import cors from 'cors';
import db from './models/index.js'
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
try {
    await db.authenticate();
    console.log('Conexion exitosa a la DB');
  } catch (error) {
    console.error(`El error de conxion es: ${error}`);
  }
// app.get('/', (req,res) =>{
//     res.send('HOLA MUNDO')
// })

app.listen(8000, ()=>{
    console.log('Server UP runnig in http://localhost:8000/')
})