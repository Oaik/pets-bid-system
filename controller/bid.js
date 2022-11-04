const bidService = require('../service/bid');

module.exports.getBids = async function(req, res) {
    console.log("-----controller:getBids-----")

    const bid = req.body;
    const rpi = req.query.rpi || 0;
    const rps = req.query.rps || 5;

    const allBids = await bidService.getBids(bid, rpi, rps);
    return allBids;
}

module.exports.placeBid = async function(req, res) {
    console.log("-----controller:getBids-----")

    const bid = req.body;
    await bidService.placeBid(bid);
}