const bidService = require('../service/bid');
const UUID = require('uuid');

function isValidUUID(uuid) {
    return UUID.validate(uuid);
}

module.exports.getBids = async function(req, res) {
    console.log("-----controller:getBids-----")

    const petId = req.params.petId;
    const rpi = req.query.rpi || 0;
    const rps = req.query.rps || 5;

    if(!petId)
        throw new Error("Missing required field");

    if(!isValidUUID(petId)) {
        throw new Error("Invalid PetId");
    }

    const allBids = await bidService.getBids(petId, rpi, rps);
    return allBids;
}

module.exports.placeBid = async function(req, res) {
    console.log("-----controller:getBids-----")

    const bid = req.body;
    const petId = req.params.petId;

    if(!petId || !bid.ownerId || !bid.userId || !bid.price)
        throw new Error("Missing required field");

    if(!isValidUUID(petId))
        throw new Error("Invalid PetId");
    
    if(isNaN(bid.price))
        throw new Error("Price should be a number");
        
    if(!isValidUUID(bid.ownerId) || !isValidUUID(bid.userId))
        throw new Error("Invalid Id in request body");
    

    await bidService.placeBid(bid, petId);
}