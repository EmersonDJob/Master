const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://emersondll:Salmo70@cluster0.elepoxk.mongodb.net/test');
}


module.exports = startDB;
