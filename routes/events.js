var express = require('express');
var router = express.Router();

const { getAllEvents, addEvent, getByActor } = require('../controllers/events');

// Routes related to event
router.get('/events', getAllEvents);
router.post('/events', addEvent);
router.get('/events/actors/:actorID', getByActor);

module.exports = router;
