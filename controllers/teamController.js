const TeamEntry = require('../models/TeamEntry');

exports.addTeam = async (req, res) => {
    try {
        const teamEntry = new TeamEntry(req.body);
        await teamEntry.save();
        res.status(201).send(teamEntry);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.viewTeamsResults = async (req, res) => {
    try {
        const teams = await TeamEntry.find().sort({ totalPoints: -1 });
        res.status(200).send(teams);
    } catch (error) {
        res.status(400).send(error);
    }
};
