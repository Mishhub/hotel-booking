const hotels = require('./schema')


module.exports = async (req, res) => {
    try{
        const hotel = new hotels({
            ownerId: req.user._id,
            name: req.body.name,
            description: req.body.description,
            rooms: req.body.rooms
        });
        const response = await hotel.save();
        if(response)
            return res.json({message: "success"})
    }
    catch(err){
        return res.status(400).json({
            message: err
        })
    }
}