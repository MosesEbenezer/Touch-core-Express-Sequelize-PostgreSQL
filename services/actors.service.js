const { sequelize, db } = require('../models');

exports.getAllActorss = () => {
	return await db.Events.findAll({
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
		order: sequelize.literal('created_at DESC'),
		order: sequelize.literal('actor.login DESC'),
	});
};

exports.getActor = (actorID) => {
	return await db.Events.findAll({
		where: { actor: { id: actorID } },
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
	});
};

exports.updateActorr = (actorID, url) => {
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

exports.getStreakk = () => {
	// still not clarified
	return await db.Events.findAll({
		attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))]],
		group: ['Events.actor'],
		raw: true,
		order: sequelize.literal('created_at DESC'),
		order: sequelize.literal('actor.login DESC'),
	});
};
