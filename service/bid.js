const bidDal = require('../dal/bid');

module.exports.getBids = async function(petId, rpi, rps) {
    console.log("-----Service:getBids-----")

    const query = {
        petId: petId
    }

    const allBids = await bidDal.getBidsByPetId(query, rpi, rps);
    return allBids;
}

module.exports.placeBid = async function(bid, petId) {
    console.log("-----Service:placeBid-----")

    const query = {
        petId: petId,
        ownerId: bid.ownerId,
        userId: bid.userId,
        price: bid.price
    };

    await bidDal.placeBid(query);
}