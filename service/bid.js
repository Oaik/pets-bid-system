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