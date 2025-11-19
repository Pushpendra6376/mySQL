const Students = require('./students');
const Identitycard = require('./IdentityCard');
const department = require('./department');
const Courses = require('./Courses');
const StudentCourses = require('./StudentCourses');

// one to one
Students.hasOne(Identitycard);
Identitycard.belongsTo(Students);

//one to many
department.hasMany(Students);
Students.belongsTo(department);

//many to many association
Students.belongsToMany(Courses,{through:StudentCourses});
Courses.belongsToMany(Students,{through:StudentCourses});


module.exports ={
    Students,
    Identitycard,
    Courses,
    StudentCourses,
    department
}
