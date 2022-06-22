const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    addUser :  (req,res) =>{
        try{
            const newUser = new User({
                email: req.body.email,
                password : req.body.password,
                role : req.body.role,
                phone : req.body.phone
            });
            newUser.save()
            .then(() => res.json('Nuovo utente creato'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
        catch(e){
            res.status(500).json({error: e});
        }        
    }
}