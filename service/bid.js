const bidDal = require('../dal/bid');

module.exports.getBids = async function(bid, rpi, rps) {
    console.log("-----Service:getBids-----")
    const petId = bid.petId;

    const allBids = await bidDal.getBidsByPetId(petId, rpi, rps);
    return allBids;
}