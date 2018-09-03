class UtilDate {
    constructor() {}
    toDateString(date) {
        if (typeof date === 'string') {
            return date.replace(/T/, ' ').replace(/\..+/, '');
        } if (typeof date === 'date') {
            return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '');
        }else {
            console.log(date);
            return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        }
        throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
    }
    checkValidDate(date){
       return date.replace(/T/, ' ').replace(/\..+/, '');
    }

    checkValidDateStr(str) {
       return str.match(/^\d{4}-\d{2}-\d{2}-\{T}-\d{2}$/) !== null;
    }

    /* 
    item.fechaNacimiento = item.fechaNacimiento.replace('T',' ');
        item.fechaNacimiento = item.fechaNacimiento.replace('.000Z',''); */
}

exports.UtilDate = UtilDate;

  