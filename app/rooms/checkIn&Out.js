const hotels = require('../hotels/schema');
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;


module.exports = async (req, res) => {
    try{
        console.log("console",req.query.checkin)
        const success = await hotels.findOneAndUpdate(
            { "rooms._id": ObjectId(req.params.id) },
            {$set: {
                "rooms.$.isAvailable": req.query.checkin? false: true,
                "rooms.$.checkedInUser": req.query.checkin? ObjectId(req.query.userId): null
            }}
        )
        if(success)
            return res.json({
                message: "success"
            })
    }
    catch(err){
        return res.status(400).json({message: err})
    }
}