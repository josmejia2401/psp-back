module.exports = (sequelize, Sequelize) => {
	const LOG_T_DETAIL = sequelize.define('log_t_detail', {
	  timelogentryid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  projectid: {
		type: Sequelize.INTEGER,
		allowNull: false
		},
		phaseid: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		startdatetime: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW
		},
		stopdatetime: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW
		},
		interruptminutes: {
			type: Sequelize.INTEGER,
			allowNull: false
	  },
		deltatimeminutes: {
			type: Sequelize.INTEGER,
			allowNull: false
	  },
		comments: {
		  type: Sequelize.STRING
	  }
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'log_t_detail'
	});
	return LOG_T_DETAIL;
}