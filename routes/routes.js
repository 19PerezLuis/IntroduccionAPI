const { application, request, response } = require('express');
const pool = require('../data/config');

const router = app => {
    app.get('/',(request, response) => {
        response,send({
            message: 'bienbenido a NodeJS | Express REST API'
        });
    });

}