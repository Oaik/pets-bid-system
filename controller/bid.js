const bidsService = require('../service/bid');

module.exports.getBids = async function(req, res) {
    console.log("-----controller:getBids-----")

    const bid = req.body;
    const rpi = req.query.rpi || 0;
    const rps = req.query.rps || 5;

    const allBids = await bidsService.getBids(bid, rpi, rps);
    return allBids;
}