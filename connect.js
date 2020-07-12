let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let cors = require('cors');
const PORT = 3000;

let pool = new pg.Pool({
    user: 'postgres',
    database: 'postgres',
    password: '#senha',
    host: 'localhost',
    port: 5432,
    max: 10
});

/*pool.connect((err, db, done) => {
    if(err){
        return console.log(err);
    }else{
        var username = 'admin1';
        var password = '123';
        var email = 'admin1@gmail.com';
        db.query('INSERT INTO usuario (username, password, email) VALUES ($1, $2, $3)', [username, password, email], (err, table) => {
            done();
            if(err){
                return console.log(err);
            }else{
                console.log('INSERTED DATA SUCCESS');
                db.end();
            }
        })
    }
})*/


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function (request, response, next) {
    response.header("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));
