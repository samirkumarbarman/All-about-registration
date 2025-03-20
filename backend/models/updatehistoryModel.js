import mongoose from 'mongoose';

const updateHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedFields: {
        type: Map,
        of: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('UpdateHistory', updateHistorySchema);