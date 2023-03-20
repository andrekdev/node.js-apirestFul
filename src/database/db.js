
const mongoose = require('mongoose');

connect().catch(err => console.log(err));

async function connect() {
  await mongoose.connect('mongodb://localhost:27017/api-restful');
  const db = mongoose.connection
  console.log('Banco de dados conectado com sucesso!')

}

module.exports = {
    connect
}