const Students = require('../models/students');
const db = require('../utils/db-collection');
const IdentityCard = require('../models/IdentityCard');


// INSERT student
const addStudent = async (req, res) => {


    //adding an entry with sequelize
    try {
        const { name, email, age } = req.body;
        const student = await Students.create({
            email:email,
            name:name
        })

        res.status(201).send(`user with ${name} is created`)

    } catch (error) {
        res.status(500).send("unable to make an entry")
        
    }

    
};

//adding values to student and identity table 
const addingValuesToStudentAndIdentityTable = async (req,res) =>{
    try {
        const student  = await Students.create(req.body.student);
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            studentId:student.id
        })

        res.status(201).json({student, idCard});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

// UPDATE student
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        // Finding the  student which have to update
        const student = await Students.findByPk(id);
        if (!student) {
            return res.status(404).send("Student not found");
        }

        // this is for Update fields
        student.name = name || student.name;
        student.email = email || student.email;
        student.age = age || student.age;

        // Saving the updated info of student
        await student.save();

        res.status(200).send("Student entries updated successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Student could not be updated");
    }
};


// GET all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Students.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET student by ID
const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// DELETE student
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Students.destroy({
            where: {
                id:id
            }
        })

        if(!student){
                res.status(404).send("Student data not found")
        }

        res.status(200).send("student data is deleted")
    } catch (error) {
        res.status(500).send("User canot be deleted")
    }

};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    addingValuesToStudentAndIdentityTable
};
