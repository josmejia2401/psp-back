module.exports = (sequelize, Sequelize) => {
	const USERS = sequelize.define('users', {
	  userid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  userprofileid: {
		type: Sequelize.INTEGER
	  },
	  name: {
		  type: Sequelize.STRING
		},
		instructor: {
		  type: Sequelize.STRING
		},
		initials: {
		  type: Sequelize.STRING
		},
		organizationname: {
		  type: Sequelize.STRING
	  },
		username: {
		  type: Sequelize.STRING
	  },
		password: {
		  type: Sequelize.STRING
	  },
    token: {
        type: Sequelize.VIRTUAL
    }
	},
	{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'users'
	});
	return USERS;
}