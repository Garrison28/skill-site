const express = require('express');
const router = express.Router;

router.get('/skills', function(req,res) {
    res.render('skills', {name: 'Garrison Highsith', 
                        skills: ['html', 'CSS', 'Javascript', 'Terminal/GIT', 'Playing the Saxaphone']})
});


router.get('/contact', function(req, res) {
    res.render('contact', {contacts: [
        {cell: '850-901-7232'},
        {email: 'ghighsmith28@gmail.com'},
        {github: 'github.com/Garrison28'}
    ]});
});


module.exports = router;