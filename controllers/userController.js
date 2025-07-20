const {validationResult} = require('express-validator');
const User = require('../models/user.model');

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.redirect(`/user/register?error=${encodeURIComponent(errors.array()[0].msg)}`);
    }
    
    try {
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({
            $or: [{username}, {email}]
        })

        if(existingUser){
            const isMailTaken = existingUser.email === email;
            const isUsernameTaken = existingUser.username === username;
            const errorMessage = isMailTaken ? `This email is already registered. Please login or use another.` : `This username is already taken. Try a different one.`;
            return res.redirect(`/user/register?error=${encodeURIComponent(errorMessage)}`);
        }

        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save();
        console.log(`User registered successfully: ${JSON.stringify(newUser)}`);
        res.send(`thank you for registering, ${newUser.username}!`);
        
    } catch (error) {
        console.error('Error registering user:', error);
        return res.render('register', {error: 'An error occurred while registering. Please try again.'});
        
    }

}