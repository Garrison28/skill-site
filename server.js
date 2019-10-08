const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

// app.use('/', require('./routes/main'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/skills', function(req,res) {
    res.render('skills', {name: 'Garrison Highsith', 
                        skills: ['html', 'CSS', 'Javascript', 'Terminal/GIT', 'Playing the Saxaphone']})
});

app.get('/contact', function(req, res) {
    res.render('contact', {contacts: [
        {cell: '850-901-7232'},
        {email: 'ghighsmith28@gmail.com'},
        {github: 'github.com/Garrison28'}
    ]});
});

app.listen(3000, function () {
    console.log('Server running')
})