const mongoose = require('mongoose');
const uuid = require('uuid');

const bidSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            default: uuid.v4,
        },
        petId: {
            type: String,
            required: true,
        },
        ownerId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        }
    },
    { timestamps: { updatedAt: 'updatedAt', createdAt: 'createdAt' } },
    { collection: 'Bid' }
);

bidSchema.index({ petId: 1 });

var bidModel = mongoose.model(
    'Bid',
    bidSchema,
);

module.exports = bidModel;
