const hotels = require('../hotels/schema')


module.exports = async (req, res) => {
    try{
        const success = await hotels.findOneAndUpdate(
            {_id: req.params.hotelId},
            { $addToSet: { rooms: 
                { $each: req.body.rooms }
            }
            }
        )
        if(success)
            return res.json({message: "success"})
    }
    catch(err){
        return res.status(400).json({
            message: err
        })
    }
}
