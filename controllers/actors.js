const { responseError, responseSuccess } = require('../services/common/responses.service');
const { getAllActorss, getActor, updateActorr, getStreakk } = require('../services/actors.service');

var getAllActors = async (req, res) => {
	try {
		const actors = await getAllActorss();
		return responseSuccess(res, 'Successful', actors, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured ', error.toString(), 500);
	}
};

var updateActor = async (req, res) => {
	try {
		const actor = await getActor(req.body.id);
		if (!actor || actor.length == 0) return responseError(res, 'Actor Not Found', null, 404);

		const updated_actor = await updateActorr(req.body.id, req.body.avatar_url);
		if (updated_actor) return responseSuccess(res, 'Successful', actors, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

var getStreak = async (req, res) => {
	try {
		const actors = await getStreakk();
		return responseSuccess(res, 'Successful', actors, 200);
	} catch (error) {
		return responseError(res, 'An Error Occured', error.toString(), 500);
	}
};

module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak,
};
