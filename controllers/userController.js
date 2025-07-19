const {validationResult} = require('express-validator');

exports.registerUser = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.render('register', {error: errors.array()[0].msg});
    }
    console.log(req.body);
    res.send(`User registered: ${JSON.stringify(req.body)}`);
}