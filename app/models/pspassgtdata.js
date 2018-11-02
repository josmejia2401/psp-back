module.exports = (sequelize, Sequelize) => {
	const PSP_ASSGT_DATA = sequelize.define('psp_assgt_data', {
		pspassgtdataid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true	
		},
		pspstudataid: {
		 type: Sequelize.INTEGER	
		},
		assgtstatusid: {
		 type: Sequelize.INTEGER	
		},
		assgtsequence: {
		 type: Sequelize.INTEGER	
		},
		userid: {
		 type: Sequelize.INTEGER	
		},
		projectid: {
		 type: Sequelize.INTEGER	
		},
		studentname: {
		 type: Sequelize.STRING	
		},
		programassignment: {
		 type: Sequelize.STRING	
		},
		estloc: {
		 type: Sequelize.INTEGER	
		},
		actloc: {
		 type: Sequelize.INTEGER	
		},
		estmin: {
		 type: Sequelize.INTEGER	
		},
		actmin: {
		 type: Sequelize.INTEGER	
		},
		estdefrem: {
		 type: Sequelize.INTEGER	
		},
		actdefrem: {
		 type: Sequelize.INTEGER	
		},
		estminplan: {
		 type: Sequelize.INTEGER	
		},
		actminplan: {
		 type: Sequelize.INTEGER	
		},
		estmindsgn: {
		 type: Sequelize.INTEGER	
		},
		actmindsgn: {
		 type: Sequelize.INTEGER	
		},
		estmindldr: {
		 type: Sequelize.INTEGER	
		},
		actmindldr: {
		 type: Sequelize.INTEGER	
		},
		estmincode: {
		 type: Sequelize.INTEGER	
		},
		actmincode: {
		 type: Sequelize.INTEGER	
		},
		estmincr: {
		 type: Sequelize.INTEGER	
		},
		actmincr: {
		 type: Sequelize.INTEGER	
		},
		estmincompile: {
		 type: Sequelize.INTEGER	
		},
		actmincompile: {
		 type: Sequelize.INTEGER	
		},
		estmintest: {
		 type: Sequelize.INTEGER	
		},
		actmintest: {
		 type: Sequelize.INTEGER	
		},
		estminpm: {
		 type: Sequelize.INTEGER	
		},
		actminpm: {
		 type: Sequelize.INTEGER	
		},
		estdefinjplan: {
		 type: Sequelize.INTEGER	
		},
		actdefinjplan: {
		 type: Sequelize.INTEGER	
		},
		estdefinjdsgn: {
		 type: Sequelize.INTEGER	
		},
		actdefinjdsgn: {
		 type: Sequelize.INTEGER	
		},
		estdefinjdldr: {
		 type: Sequelize.INTEGER	
		},
		actdefinjdldr: {
		 type: Sequelize.INTEGER	
		},
		estdefinjcode: {
		 type: Sequelize.INTEGER	
		},
		actdefinjcode: {
		 type: Sequelize.INTEGER	
		},
		estdefinjcr: {
		 type: Sequelize.INTEGER	
		},
		actdefinjcr: {
		 type: Sequelize.INTEGER	
		},
		estdefinjcompile: {
		 type: Sequelize.INTEGER	
		},
		actdefinjcompile: {
		 type: Sequelize.INTEGER	
		},
		estdefinjtest: {
		 type: Sequelize.INTEGER	
		},
		actdefinjtest: {
		 type: Sequelize.INTEGER	
		},
		estdefremplan: {
		 type: Sequelize.INTEGER	
		},
		actdefremplan: {
		 type: Sequelize.INTEGER	
		},
		estdefremdsgn: {
		 type: Sequelize.INTEGER	
		},
		actdefremdsgn: {
		 type: Sequelize.INTEGER	
		},
		estdefremdldr: {
		 type: Sequelize.INTEGER	
		},
		actdefremdldr: {
		 type: Sequelize.INTEGER	
		},
		estdefremcode: {
		 type: Sequelize.INTEGER	
		},
		actdefremcode: {
		 type: Sequelize.INTEGER	
		},
		estdefremcr: {
		 type: Sequelize.INTEGER	
		},
		actdefremcr: {
		 type: Sequelize.INTEGER	
		},
		estdefremcompile: {
		 type: Sequelize.INTEGER	
		},
		actdefremcompile: {
		 type: Sequelize.INTEGER	
		},
		estdefremtest: {
		 type: Sequelize.INTEGER	
		},
		actdefremtest: {
		 type: Sequelize.INTEGER	
		}
	},{
		underscored: false,
		timestamps: false,
		createdAt: false,
		createdAt: false,
		freezeTableName: true,
		tableName : 'psp_assgt_data'
	});
	return PSP_ASSGT_DATA;
}