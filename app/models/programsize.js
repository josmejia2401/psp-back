module.exports = (sequelize, Sequelize) => {
	const PROGRAM_SIZE = sequelize.define('program_size', {
		programsizeid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		parentprogramsize: {
			type: Sequelize.INTEGER
		},
		projectid: {
			type: Sequelize.INTEGER
		},
		sizemeasure: {
			type: Sequelize.INTEGER
		},
		createddate: {
			type: Sequelize.DATE
		},
		plansizedate: {
			type: Sequelize.DATE
		},
		useprobe: {
			type: Sequelize.STRING
		},
		planb: {
			type: Sequelize.INTEGER
		},
		pland: {
			type: Sequelize.INTEGER
		},
		planm: {
			type: Sequelize.INTEGER
		},
		plana: {
			type: Sequelize.INTEGER
		},
		planr: {
			type: Sequelize.INTEGER
		},
		plannc: {
			type: Sequelize.INTEGER
		},
		plant: {
			type: Sequelize.INTEGER
		},
		plannr: {
			type: Sequelize.INTEGER
		},
		planba: {
			type: Sequelize.INTEGER
		},
		planap: {
			type: Sequelize.INTEGER
		},
		plane: {
			type: Sequelize.INTEGER
		},
		histb: {
			type: Sequelize.INTEGER
		},
		histd: {
			type: Sequelize.INTEGER
		},
		histm: {
			type: Sequelize.INTEGER
		},
		hista: {
			type: Sequelize.INTEGER
		},
		histr: {
			type: Sequelize.INTEGER
		},
		histnc: {
			type: Sequelize.INTEGER
		},
		histt: {
			type: Sequelize.INTEGER
		},
		histnr: {
			type: Sequelize.INTEGER
		},
		histba: {
			type: Sequelize.INTEGER
		},
		histap: {
			type: Sequelize.INTEGER
		},
		histe: {
			type: Sequelize.INTEGER
		},
		actualsizedate: {
			type: Sequelize.DATE
		},
		actualb: {
			type: Sequelize.INTEGER
		},
		actuald: {
			type: Sequelize.INTEGER
		},
		actualm: {
			type: Sequelize.INTEGER
		},
		actuala: {
			type: Sequelize.INTEGER
		},
		actualr: {
			type: Sequelize.INTEGER
		},
		actualnc: {
			type: Sequelize.INTEGER
		},
		actualt: {
			type: Sequelize.INTEGER
		},
		actualnr: {
			type: Sequelize.INTEGER
		},
		actualba: {
			type: Sequelize.INTEGER
		},
		actualap: {
			type: Sequelize.INTEGER
		},
		actuale: {
			type: Sequelize.INTEGER
		},
		todateb: {
			type: Sequelize.INTEGER
		},
		todated: {
			type: Sequelize.INTEGER
		},
		todatem: {
			type: Sequelize.INTEGER
		},
		todatea: {
			type: Sequelize.INTEGER
		},
		todater: {
			type: Sequelize.INTEGER
		},
		todatenc: {
			type: Sequelize.INTEGER
		},
		todatet: {
			type: Sequelize.INTEGER
		},
		todatenr: {
			type: Sequelize.INTEGER
		},
		todateba: {
			type: Sequelize.INTEGER
		},
		todateap: {
			type: Sequelize.INTEGER
		},
		todatee: {
			type: Sequelize.INTEGER
		},
		probemethodsize: {
			type: Sequelize.STRING
		},
		probesizer2: {
			type: Sequelize.INTEGER
		},
		probesizebeta0: {
			type: Sequelize.INTEGER
		},
		probesizebeta1: {
			type: Sequelize.INTEGER
		},
		probesizenc: {
			type: Sequelize.INTEGER
		},
		probesizetotal: {
			type: Sequelize.INTEGER
		},
		probesizerange: {
			type: Sequelize.INTEGER
		},
		probesizelpi: {
			type: Sequelize.INTEGER
		},
		probesizeupi: {
			type: Sequelize.INTEGER
		},
		probemethodtime: {
			type: Sequelize.STRING
		},
		probetimer2: {
			type: Sequelize.INTEGER
		},
		probetimebeta0: {
			type: Sequelize.INTEGER
		},
		probetimebeta1: {
			type: Sequelize.INTEGER
		},
		probetimetotal: {
			type: Sequelize.INTEGER
		},
		probetimerange: {
			type: Sequelize.INTEGER
		},
		probetimelpi: {
			type: Sequelize.INTEGER
		},
		probetimeupi: {
			type: Sequelize.INTEGER
		},
		userid: {
			type: Sequelize.INTEGER
		},
		name: {
			type: Sequelize.STRING
		},
		idparts: {
			type: Sequelize.INTEGER
		},
		programsizeallid: {
			type: Sequelize.INTEGER
		}
	}, {
			underscored: false,
			timestamps: false,
			createdAt: false,
			createdAt: false,
			freezeTableName: true,
			tableName: 'program_size'
		});
	return PROGRAM_SIZE;
}