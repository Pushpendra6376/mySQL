const Students = require('./students');
const Identitycard = require('./IdentityCard');
const department = require('./department');

// one to one
Students.hasOne(Identitycard);
Identitycard.belongsTo(Students);

//one to many
department.hasMany(Students);
Students.belongsTo(department);

module.exports ={
    Students,
    Identitycard
}
