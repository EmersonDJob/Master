const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://');
}


module.exports = startDB;
