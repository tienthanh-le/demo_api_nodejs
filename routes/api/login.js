const express = require('express');

const router = express.Router();

//Login Page
router.get('/',(req, res) => {
    res.render('Login Page');
})

//Register Page
router.get('/register',(req, res) => {
    res.render('Register Page');
})

module.exports = router;