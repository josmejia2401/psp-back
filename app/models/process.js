module.exports = (sequelize, Sequelize) => {
	const PROCESS = sequelize.define('PROCESSES', {
	  ProcessID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  ParentProcessID: {
		type: Sequelize.INTEGER
		},
		ProcessTypeID: {
			type: Sequelize.INTEGER
		},
	  Symbol: {
		  type: Sequelize.STRING
		},
		Name: {
		  type: Sequelize.STRING
		},
		Purpose: {
		  type: Sequelize.STRING
		},
		FormPlanSummary: {
		  type: Sequelize.STRING
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true
	});
	return PROCESS;
}