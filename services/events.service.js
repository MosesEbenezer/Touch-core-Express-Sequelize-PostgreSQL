const { sequelize, db } = require('../models');

exports.getAllEvents = async () => {
	return await db.Events.findAll({
		order: [['id', 'ASC']],
	});
};

exports.getEventById = async (id) => {
	return await db.Events.findOne(id);
};

exports.addEvent = async (data) => {
	return await db.Events.create(data);
};

exports.getByActor = async (actor_id) => {
	return await db.Events.findAll({
		where: {
			actor: {
				id: actor_id,
			},
		},
	});
};

exports.eraseEvents = async () => {
  return await db.Events.destroy({ truncate: true })
};
