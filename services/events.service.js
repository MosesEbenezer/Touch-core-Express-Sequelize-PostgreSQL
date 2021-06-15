const { sequelize, db } = require('../models');

exports.getAllEventss = async () => {
	return await db.Events.findAll({
		order: [['id', 'ASC']],
	});
};

exports.getEventById = async (id) => {
	return await db.Events.findOne(id);
};

exports.addEventt = async (data) => {
	return await db.Events.create(data);
};

exports.getByActorr = async (actor_id) => {
	return await db.Events.findAll({
		where: {
			actor: {
				id: actor_id,
			},
		},
		order: [['id', 'ASC']],
	});
};

exports.eraseEventss = async () => {
  return await db.Events.destroy({ truncate: true })
};
