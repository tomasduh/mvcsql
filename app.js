const express = require('express');
const app = express();

const conexion = require('./database/db');

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

app.listen(3000);

console.log('server colocado');
// console.log('a');