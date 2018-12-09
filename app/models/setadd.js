module.exports = (sequelize, Sequelize) => {
	const SET_ADD = sequelize.define('set_add', {
		setaddid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		projectid : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		programsizeid  : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		sizemeasureid : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		partid : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		loctypeid : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		parttypestandardi : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		name : {
			type: Sequelize.STRING,
			allowNull: true
		},
		methods : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		relsize : {
			type: Sequelize.STRING,
			allowNull: true
		},
		planap : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		plannewreuseflag : {
			type: Sequelize.STRING,
			allowNull: true
		},
		actualap : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualnewreusefla : {
			type: Sequelize.STRING,
			allowNull: true
		},
		actualmethods : {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'set_add'
	});
	return SET_ADD;
}