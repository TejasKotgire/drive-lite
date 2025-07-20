const {body} = require('express-validator');

exports.registerValidation = [
    body('username').notEmpty().trim().withMessage('Username is required'),
    body('email').isEmail().trim().withMessage('Enter a valid email'),
    body('password').isStrongPassword().trim().withMessage('Password must be strong with at least 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol')
];