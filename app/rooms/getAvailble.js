const hotels = require('../hotels/schema')
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;


module.exports = async (req, res) => {
    try{
        const hotel = await hotels.aggregate([
            { $match: { 
                rooms: { $elemMatch: { "isAvailable": true } }, 
                $expr: {$eq: ["$_id", ObjectId(req.params.hotelId)]}
            } }, 
            { $unwind : "$rooms" },
            { $match: { "rooms.isAvailable" : true } },
            { $group : { _id : "$_id", rooms : { $addToSet : "$rooms" } }}
        ])
        return res.json( {rooms: hotel[0].rooms, count: hotel[0].rooms.length})
    }
    catch(err){
        return res.json({message: err})
    }
}
