const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.send('You hit the home route');
});

app.use('/', require('./routes/main'));

app.listen(3000, function() {
    console.log('Server running')
})