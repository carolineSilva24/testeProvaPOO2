import express from 'express';
import MainRouter from './routes/MainRoutes';
import UsuarioRouter from './routes/UsuarioRoute';
import LeilaoRouter from './routes/LeilaoRoute';
import LanceRouter from './routes/LanceRoute';


const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UsuarioRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);


app.listen(3000, function(){
    console.log("Server running on port 3000");
})