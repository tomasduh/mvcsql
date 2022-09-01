const e = require('express');
const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'productos'
})

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion es: '+error);
        return
    }
    console.log('conexion establescida a base de datos');
})

module.exports = conexion;