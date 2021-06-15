const { sequelize, db } = require('../models')

exports.getAllActors = () => {
	return await db.Events.findAll({
    attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))], ],
    group: ['Events.actor'],
    raw: true,
    order: sequelize.literal('created_at DESC'),
    order: sequelize.literal('actor.login DESC'),
  });
};

exports.updateActor = (data, condition) => {
  return await db.Events.update(data, {
    where: condition,
  });
};

exports.getStreak = () => { // still not clarified
  return await db.Events.findAll({
    attributes: ['actor', [sequelize.fn('count', sequelize.col('actor'))], ],
    group: ['Events.actor'],
    raw: true,
    order: sequelize.literal('created_at DESC'),
    order: sequelize.literal('actor.login DESC'),
  });
};