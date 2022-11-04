const bidModel = require('../model/bid');

module.exports.getBidsByPetId = async function(query, rpi, rps) {
    console.log("-----dal:getBidsByPetId-----")
    
    try {
        const bids = await bidModel.aggregate([
            {
              $match: query
            },
            {
                $skip: rpi * rps
            },
            {
              $limit: rps
            },
            {
                $project: {
                    _id: 0,
                    petId: 1,
                    ownerId: 1,
                    userId: 1,
                    price: 1
                }
            }
          ]);
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