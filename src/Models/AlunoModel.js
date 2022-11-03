const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AlunotSchema = new Schema({
    id: ObjectId,
    Nome: String,
    Idade: Number,
    genero: String,
    peso: Number,
    altura: Number
});


// nome da tabela no bando de dados e o Schema
const AlunoModel = mongoose.model('Aluno', AlunotSchema);

module.exports = AlunoModel;
