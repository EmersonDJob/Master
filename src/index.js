const app = require('./app');
const Loaders = require("./loaders/index.js");


Loaders.start();

app.listen(3030, () => console.log("Server is Running!"));
