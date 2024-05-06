const mongoose = require('mongoose');

const teamEntrySchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    }],
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    viceCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    totalPoints: {
        type: Number,
        default: 0,
    },
});

const TeamEntry = mongoose.model('TeamEntry', teamEntrySchema);

module.exports = TeamEntry;
