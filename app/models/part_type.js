module.exports = (sequelize, Sequelize) => {
	const PART_TYPE = sequelize.define('part_type', {
		parttypeid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		sizemeasureid : {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		name : {
			type: Sequelize.STRING,
			allowNull: true
		},
		description : {
			type: Sequelize.STRING,
			allowNull: true
		},
		vs : {
			type: Sequelize.DOUBLE,
			allowNull: true
		},
		s : {
			type: Sequelize.DOUBLE,
			allowNull: true
		},
		m : {
			type: Sequelize.DOUBLE,
			allowNull: true
		},
		l : {
			type: Sequelize.DOUBLE,
			allowNull: true
		},
		vl : {
			type: Sequelize.DOUBLE,
			allowNull: true
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'part_type'
	});
	return PART_TYPE;
}