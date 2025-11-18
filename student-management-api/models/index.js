const Students = require('./students');
const Identitycard = require('./IdentityCard');

// one to one
Students.hasOne(Identitycard);
Identitycard.belongsTo(Students);

module.exports ={
    Students,
    Identitycard
}
