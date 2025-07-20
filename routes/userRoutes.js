const express = require('express');
const router = express.Router();
const { registerValidation } = require('../middlewares/userValidator');
const { registerUser } = require('../controllers/userController');

router.get('/register', (req, res)=>{
    const error = req.query.error || null;
    res.render('register', {error: error});
})

router.post('/register', registerValidation, registerUser);

module.exports = router;