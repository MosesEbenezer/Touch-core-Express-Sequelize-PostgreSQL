const { sequelize, db } = require('../models');

exports.getAllActorss = async () => {
	return await db.Events.findAll({
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
		order: sequelize.literal('created_at DESC'),
		order: sequelize.literal('actor.login DESC'),
	});
};

exports.getActor = async (actorID) => {
	return await db.Events.findAll({
		where: { actor: { id: actorID } },
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
	});
};

exports.updateActorr = async (actorID, url) => {
	return await db.Events.update(
		{
			actor: {
				avatar_url: url,
			},
		},
		{
			where: {
				actor: {
					id: actorID,
				},
			},
		}
	);
};

exports.getStreakk = async () => {
	// still not clarified
	return await db.Events.findAll({
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
		order: sequelize.literal('created_at DESC'),
		order: sequelize.literal('actor.login DESC'),
	});
};
