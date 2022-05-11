const { application, request, response } = require('express');
const pool = require('../data/config');

const router = app => {
    app.get('/',(request, response) => {
        response,send({
            message: 'bienbenido a NodeJS | Express REST API'
        });
    });

}
app.get('/users', (request,response) =>{
    pool.query('Select * from users', (error,result)=>{
        if (error) throw error ;
            response.send(result);    
    })
})
app.get('/users:id', (request,response) =>{
    pool.query('Select * from users where id= ? ',id, (error,result)=>{
        if (error) throw error ;
            response.send(result);    
    })
})
app.get('/users', (request,response) =>{
    pool.query('insert into users set ? ',request.body, (error,result)=>{
        if (error) throw error ;
            response.status(201).send(`user added with ID: ${result.insertid}`);    
    })
})
