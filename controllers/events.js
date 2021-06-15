const { responseError, responseSuccess } = require('../services/common/responses.service');
const { getAllEventss, getEventById, addEventt, getByActorr, eraseEventss } = require('../services/events.service');

var getAllEvents = async (req, res) => {
	try {
		const events = await getAllEventss();
		return responseSuccess(res, 'Successful', events, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

var addEvent = async (req, res) => {
	try {
		const existing_event = await getEventById(req.body.id);
		if (existing_event) return responseError(res, 'Duplicate Event', null, 400);

		const event = await addEventt(req.body);

		if (event) return responseSuccess(res, 'Successful', event, 201);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

var getByActor = async (req, res) => {
	try {
		const events = await getByActorr(req.params.actorID);
		if (!events || events.length == 0) return responseError(res, 'No Event Found', null, 404);

		return responseSuccess(res, 'Successful', events, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

var eraseEvents = async (req, res) => {
	try {
		const erased = await eraseEventss();
		if (erased) return responseSuccess(res, 'Successful', erased, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents,
};
