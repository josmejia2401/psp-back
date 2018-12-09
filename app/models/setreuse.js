module.exports = (sequelize, Sequelize) => {
	const SET_REUSE = sequelize.define('set_reuse', {
		setreuseid: {
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
		planr : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualr : {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'set_reuse'
	});
	return SET_REUSE;
}