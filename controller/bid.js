const bidService = require('../service/bid');

module.exports.getBids = async function(req, res) {
    console.log("-----controller:getBids-----")

    const petId = req.params.petId;
    const rpi = req.query.rpi || 0;
    const rps = req.query.rps || 5;

    const allBids = await bidService.getBids(petId, rpi, rps);
    return allBids;
}

module.exports.placeBid = async function(req, res) {
    console.log("-----controller:getBids-----")

    const bid = req.body;
    const petId = req.params.petId;

    await bidService.placeBid(bid, petId);
}