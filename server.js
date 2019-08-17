const express = require('express');
const SERVER_PORT=process.env.PORT || 3189
const path=require('path')
const app = express();

app.set('views', path.join(__dirname, 'views/'));

  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes/page'));
app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3189/");
});
//taskkill/f /im node.exe