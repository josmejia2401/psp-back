module.exports = (sequelize, Sequelize) => {
	const PROJECTS = sequelize.define('PROJECTS', {
	  ProjectID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  ProjectTypeID: {
		type: Sequelize.INTEGER
		},
		UserID: {
			type: Sequelize.INTEGER
		},
		ProcessID: {
				type: Sequelize.INTEGER
		},
	  Name: {
		  type: Sequelize.STRING
		},
		CreatedDate: {
		  type: Sequelize.DATE
		},
		StartDate: {
		  type: Sequelize.DATE
		},
		EndDate: {
		  type: Sequelize.DATE
	  }
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true
	});
	return PROJECTS;
}