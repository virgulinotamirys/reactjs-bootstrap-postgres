let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let cors = require('cors');
const PORT = 3000;

let pool = new pg.Pool({
    user: 'postgres',
    database: 'postgres',
    password: '#admin1801',
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


let corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(cors(corsOptions));

app.use(function (request, response, next) {
    response.header("Acess-Control-Allow-Origin", "*");
    response.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.delete('/sistemaweb/remove/:user_id', function( request, response) {
    var user_id  = request.params.user_id;
    pool.connect(function(err, db, done){
        if(err){
            return response.status(400).send(err)
        }else{
            db.query('DELETE FROM usuario WHERE user_id = $1', [Number(user_id)], function(err, result){
                done();
                if(err){
                    return response.status(400).send(err)
                }else{
                    return response.status(200).send({message: 'sucesso ao deletar'})
                }
            })
        }
    })
})

app.get('/sistemaweb/usuarios', function(request, response){
    pool.connect(function(err, db, done){
        if(err){
            return response.status(400).send(err)
        }else{
            db.query('SELECT * FROM usuario', function(err, table){
                done();
                if(err){
                    return response.status(400).send(err)
                }else{
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
    
});

app.post('/sistemaweb/new-usuario', function(request, response){
    console.log(request.body);
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;
    let values = [username, password, email];
    pool.connect((err, db, done) => {
        if(err){
            return response.status(400).send(err);
        }else{
            db.query('INSERT INTO usuario (username, password, email) VALUES ($1, $2, $3)', [...values], (err, table) => {
                done();
                if(err){
                    return response.status(400).send(err);
                }else{
                    console.log('INSERTED DATA SUCCESS');
                    response.status(201).send({message:'Data inserted'});
                }
            })
        }
    })
});


app.listen(PORT, () => console.log('Listening on port ' + PORT));
