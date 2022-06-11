import express  from 'express';
import cors from 'cors'
import { routes } from './router';

const app = express();

app.use(express.json())


app.use(routes)


app.listen(3333,()=>{
    console.log('HTTP server running')
})