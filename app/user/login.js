const users = require('./schema')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



module.exports = async (req, res) => {
    try{
        const userExist = await users.findOne({username: req.body.username})
        if (!userExist) return res.status(400).json({ message: "User does not exist"} );

        const pwdExist = await bcrypt.compare(req.body.password, userExist.password);
        if(!pwdExist) return res.status(401).json({ message: "Password incorrect"});
        console.log("checkt his one", userExist, pwdExist, process.env.code)
        const token = jwt.sign({ userid : userExist._id}, process.env.code);        
        return res.json({
            message : "success",
            token: token,
        })
    }
    catch(err){
        res.status(403).json({
            message : err
        })

    }
}