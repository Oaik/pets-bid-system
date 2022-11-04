const bidModel = require('../model/bid');

module.exports.getBidsByPetId = async function(query, rpi, rps) {
    console.log("-----dal:getBidsByPetId-----")
    
    try {
        const bids = await bidModel.find(query).skip(rpi * rps).limit(rps);
        return bids;
    } catch(error) {
        console.error("Error in getBidsByPetId Case 0", '\n', error);
        throw error;
    }
}

module.exports.placeBid = async function(query) {
    console.log("-----dal:placeBid-----")

    try {
        const bid = new bidModel(query);
        await bid.save();
    } catch(error) {
        console.error("Error in placeBid Case 0", '\n', error);
        throw error;
    }
}