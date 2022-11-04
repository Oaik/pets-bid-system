const Router = require('express');
const bidController = require('../controller/bid');

const router = Router();

router.post('/:petId', async (req, res) => {
    console.log("----- Route: POST -----", "/:petId");

    await bidController.placeBid(req, res);
    
    res.send("Bid Placed successfully");
})

router.get('/:petId', async (req, res) => {
    console.log("----- Route: GET -----", "/:petId");

    const bids = await bidController.getBids(req, res);

    res.send(bids);
})

module.exports = router;