module.exports = (sequelize, Sequelize) => {
	const USERS = sequelize.define('USERS', {
	  UserID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  UserProfileID: {
		type: Sequelize.INTEGER
	  },
	  Name: {
		  type: Sequelize.STRING
		},
		Instructor: {
		  type: Sequelize.STRING
		},
		Initials: {
		  type: Sequelize.STRING
		},
		OrganizationName: {
		  type: Sequelize.STRING
	  },
		username: {
		  type: Sequelize.STRING
	  },
		password: {
		  type: Sequelize.STRING
	  }
	},
	{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true
	});
	return USERS;
}