
var database = require ('./db')

var dados = {
  name:'Richarlison',
  altura:172,
  peso:25
}

var query = database.insert(dados).into("usuario").then(data =>{
  console.log(data)
}).catch(err =>{
  console.log(err)
});



/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const usuarios = require('./routes/usuarios');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/usuarios', usuarios);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});


  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
*/