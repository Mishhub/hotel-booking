const hotels = require('../hotels/schema')


module.exports = async (req, res) => {
    try{
        const success = await hotels.findOneAndUpdate(
            {_id: req.params.hotelId},
            { $pull: { "rooms": {number: { $in: req.body.roomNumbers}}}
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
