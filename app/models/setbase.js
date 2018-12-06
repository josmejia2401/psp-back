module.exports = (sequelize, Sequelize) => {
	const SET_BASE = sequelize.define('set_base', {
		setbaseid: {
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
		namepart : {
			type: Sequelize.STRING,
			allowNull: true
		},
		planb : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		planm : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		pland : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		planba : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualb : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualm: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actuald : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualba : {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'set_base'
	});
	return SET_BASE;
}