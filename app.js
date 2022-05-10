var express = require('express');
var app = express();

app.get('/Hola', function(req, res){
    res.send('Hola Mundo!!')
});
app.get('/Adios', function(req, res){
    res.send('Adios mundo!!')
});
app.listen(3000, function(){
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!!')

});