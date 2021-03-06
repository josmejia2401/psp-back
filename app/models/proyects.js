module.exports = (sequelize, Sequelize) => {
	const PROJECTS = sequelize.define('projects', {
	  projectid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  projecttypeid: {
		type: Sequelize.INTEGER
		},
		userid: {
			type: Sequelize.INTEGER
		},
		processid: {
				type: Sequelize.INTEGER
		},
	  name: {
		  type: Sequelize.STRING
		},
		createddate: {
		  type: Sequelize.DATE
		},
		startdate: {
		  type: Sequelize.DATE
		},
		enddate: {
		  type: Sequelize.DATE
		},
		archived: {
			type: Sequelize.STRING
		},	
		completed: {
		    type: Sequelize.STRING
   },	
	 psp0projectid: {
			 type: Sequelize.INTEGER
	},	
	planyield: {
			type: Sequelize.INTEGER
 }
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'projects'
	});
	return PROJECTS;
}