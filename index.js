const express = require('express');
const app =express();
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: '*'
}
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/', cors(corsOptions),require('./config/routes'))


app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`));