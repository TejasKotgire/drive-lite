const express = require('express');
const router = express.Router();
const { registerValidation } = require('../middlewares/userValidator');
const { registerUser } = require('../controllers/userController');

router.get('/register', (req, res)=>{
    res.render('register', {error: null});
})

router.post('/register', registerValidation, registerUser);

module.exports = router;