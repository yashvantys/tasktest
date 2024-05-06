const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.post('/add-team', teamController.addTeam);
router.get('/team-result', teamController.viewTeamsResults);

module.exports = router;
