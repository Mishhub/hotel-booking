const users = require('./schema')
const bcrypt = require('bcryptjs');


module.exports = async (req, res) => {
    try{    
        const userExist = await users.findOne(
                {username : req.body.username}
            )
        if(userExist)
            res.status(409).json({message : "Username already exist"})
    
        const salt = await bcrypt.genSalt(10);
        const hashpwd = await bcrypt.hash(req.body.password, salt)
        const user = new users({
            name: req.body.name,
            username : req.body.username,
            password : hashpwd,
        });
        await user.save();
        res.json({message: "registered"})
    }
    catch(err){
        res.status(500).json({message: err})
    }
}