module.exports = (sequelize, Sequelize) => {
	const PHASES = sequelize.define('phases', {
	  phaseid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  parentphaseid: {
		type: Sequelize.INTEGER,
		allowNull: true
		},
		symbol: {
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'phases'
	});
	return PHASES;
}