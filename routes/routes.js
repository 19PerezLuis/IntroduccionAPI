const { application, request, response } = require('express');
const pool = require('../data/config');

const router = app => {
    app.get('/',(request, response) => {
        response,send({
            message: 'bienbenido a NodeJS | Express REST API'
        });
    });


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
app.post('/users', (request,response) =>{
    pool.query('insert into users set ? ',request.body, (error,result)=>{
        if (error) throw error ;
            response.status(201).send(`user added with ID: ${result.insertid}`);    
    })
})
app.put('/users/:id' , (request, response)=>{
    const id=request.params.id;
    pool.query('UPDATE users set ? where id = ?', [request.body,id],(error,result) =>{
      if (error) throw error;
    response.send('user updated successfully.')     
   });  
});
app.delete('users/:id', (request,response)=>{
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE id = ?',id, (error,result) =>{
        if (error) throw error;
        response.send('user deleted')
        });
    });
}
module.exports = router;