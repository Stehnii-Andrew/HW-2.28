const express = require('express');
const server = express();
const path = require('path');
const createErr = require('http-errors');

const ctrl = require('./ctrl/posts');

server.set('views', path.join(__dirname, 'pizda'));
server.set('view engine', 'ejs')

server.get('/par/:id', async (req, res, next) => {
    
    const id = req.params.id;
     if( id > 50 ) {
       next(createErr(404));
     }
    const horoshaNazva = await ctrl.axiosData(id);

    console.log('request', { horoshaNazva });
    res.render('index', { horoshaNazva });
})

server.use((err, req, res, next) => {
    const code = err.status || 500;

    if (err.status !== 404) {
        log.error(err);
    }

    res.status(code);
    res.end(`Error: ${code}`)
})

server.listen(3000); 