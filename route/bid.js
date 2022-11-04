const Router = require('express');
const bidController = require('../controller/bid');

const router = Router();

router.post('/:petId', async (req, res) => {
    console.log("----- Route: POST -----", "/:petId");
    try {
        await bidController.placeBid(req, res);
    } catch(error) {
        console.error(error);
        res.status(400).send(error.message);
    }
    
    res.send("Bid Placed successfully");
})

router.get('/:petId', async (req, res) => {
    console.log("----- Route: GET -----", "/:petId");
    try {
        const bids = await bidController.getBids(req, res);
        res.send(bids);
    } catch(error) {
        console.error(error);
        res.status(400).send(error.message);
    }
})

module.exports = router;