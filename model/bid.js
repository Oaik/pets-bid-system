const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema(
    {
        petId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'pet'
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user'
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user'
        },
        price: {
            type: Number,
        }
    },
    { timestamps: { updatedAt: 'updatedAt', createdAt: 'createdAt' } },
    { collection: 'Bid' }
);


var bidModel = mongoose.model(
    'Bid',
    bidSchema,
);

module.exports = bidModel;
