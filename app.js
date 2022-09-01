const express = require('express');
const app = express();

const conexion = require('./database/db');

app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html', {
        root:__dirname
    });
})

app.get('/conexion', (req, res)=>{
    conexion.query('Select * from productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    }
    )
})


app.post('/create', (req,res)=>{
    const nombre = req.body.nombre;
    const precio = req.body.precio;

    conexion.query("INSERT INTO `productos`( `nombre`, `precio`) VALUES ("+nombre+","+precio+")",(error, result)=>{
        if(error){
            throw error;
        }
        else{
            res.send(result);
        }
    }
    )
    // res.send('enviado');
})

app.post('/update', (res,req)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    conexion.query("UPDATE `productos` SET `nombre`='"+nombre+"',`precio`='"+precio+"' WHERE `id`='"+id+"'",(error, result)=>{
        if(error){
            throw error;
        }
        else{
            res.send(result);
        }
    }
    )
})
app.listen(3000);

console.log('server colocado');
// console.log('a');