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