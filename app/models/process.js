module.exports = (sequelize, Sequelize) => {
	const PROCESS = sequelize.define('processes', {
	  processid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  parentprocessid: {
		type: Sequelize.INTEGER
		},
		processtypeid: {
			type: Sequelize.INTEGER
		},
	  symbol: {
		  type: Sequelize.STRING
		},
		name: {
		  type: Sequelize.STRING
		},
		purpose: {
		  type: Sequelize.STRING
		},
		formplansummary: {
		  type: Sequelize.STRING
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'processes'
	});
	return PROCESS;
}