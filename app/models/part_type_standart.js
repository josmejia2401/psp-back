module.exports = (sequelize, Sequelize) => {
	const PART_TYPE_STANDARD = sequelize.define('part_type_standard', {
	  parttypestandardi : {
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
			type: Sequelize.DECIMAL,
			allowNull: true
		},
		s : {
			type: Sequelize.DECIMAL,
			allowNull: true
		},
		m : {
			type: Sequelize.DECIMAL,
			allowNull: true
		},
		l : {
			type: Sequelize.DECIMAL,
			allowNull: true
		},
		vl : {
			type: Sequelize.DECIMAL,
			allowNull: true
		},
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'part_type_standard'
	});
	return PART_TYPE_STANDARD;
}