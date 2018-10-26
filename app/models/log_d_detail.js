module.exports = (sequelize, Sequelize) => {
	const LOG_D_DETAIL = sequelize.define('log_d_detail', {
	  defectlogentryid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  projectid: {
		type: Sequelize.INTEGER
		},
		phaseinjectedid: {
			type: Sequelize.INTEGER
		},
		phaseremovedid: {
			type: Sequelize.INTEGER
		},
		defecttypeid: {
			type: Sequelize.INTEGER
		},
		fixdefectid: {
			type: Sequelize.INTEGER
	  },
		fixtimeminutes: {
			type: Sequelize.INTEGER
	  },
		description: {
		  type: Sequelize.STRING
		},
		defectcount: {
			type: Sequelize.INTEGER
		},
		datefound: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW
	  }
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'log_d_detail'
	});
	return LOG_D_DETAIL;
}