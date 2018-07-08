    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var port = 4200;
    var cors = require('cors');

    // Get db credentials
    var secrets = require('./secrets');
    var dbcreds = secrets.dbcreds;

    // Mongoose connection with mongodb
    mongoose.Promise = require('bluebird');
 
    mongoose.connect(dbcreds)
        .then(() => { // if all is ok we will be here
        console.log('Start');
        })
        .catch(err => { // if error we will be here
            console.error('App starting error:', err.stack);
            process.exit(1);
        });

    // Required application specific custom router module
    var requestRouter = require('./src/routes/requestRouter');

    // Use middlewares to set view engine and post json data to the server
    app.use(express.static('public'));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/items', requestRouter);

    // Start the server
    app.listen(port, function(){
        app.get('/', (req, res) => res.send('Hello Express!'));

    console.log('Server is running on Port: ',port);
    });