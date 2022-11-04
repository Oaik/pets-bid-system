const bidDal = require('../dal/bid');

module.exports.getBids = async function(bid, rpi, rps) {
    console.log("-----Service:getBids-----")

    const petId = bid.petId;
    const query = {
        petId: petId
    }

    const allBids = await bidDal.getBidsByPetId(query, rpi, rps);
    return allBids;
}

module.exports.placeBid = async function(bid) {
    console.log("-----Service:placeBid-----")

    const query = {
        petId: bid.petId,
        ownerId: bid.ownerId,
        userId: bid.userId,
        price: bid.price
    };

    await bidDal.placeBid(query);
}