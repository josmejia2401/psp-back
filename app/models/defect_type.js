module.exports = (sequelize, Sequelize) => {
	const DEFECT_TYPE = sequelize.define('defect_type', {
	  defecttypeid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
	  },
	  typenumber: {
		type: Sequelize.INTEGER
		},
		typename: {
		  type: Sequelize.STRING
		},
		typedescription: {
			type: Sequelize.STRING
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'defect_type'
	});
	return DEFECT_TYPE;
}