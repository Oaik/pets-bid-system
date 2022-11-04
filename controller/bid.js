const bidsService = require('../service/bidsService');

module.exports.getBids = async function(req, res) {
    const bid = req.body;
    const rpi = req.query.rpi || 0;
    const rps = req.query.rps || 5;

    const allBids = await bidsService.getBids(bid, rpi, rps);
    return allBids;
}