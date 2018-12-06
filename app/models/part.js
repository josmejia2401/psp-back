module.exports = (sequelize, Sequelize) => {
	const PARTS = sequelize.define('parts', {
	  partid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		parentpartid: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		projectid: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		sizemeasureid: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		loctypeid: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		parttypestandardi: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		containername: {
			type: Sequelize.STRING,
			allowNull: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: true
		},
		actualsize: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		actualmethods: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		userid: {
			type: Sequelize.INTEGER,
			allowNull: false
		}	
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'parts'
	});
	return PARTS;
}