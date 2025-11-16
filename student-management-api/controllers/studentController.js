const Students = require('../models/students');
const db = require('../utils/db-collection');

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
const getAllStudents = (req, res) => {
    const query = "SELECT * FROM students";

    db.execute(query, (err, results) => {
        if (err) {
            console.log("FETCH Error:", err);
            return res.status(500).send(err.message);
        }

        res.status(200).json(results);
    });
};

// GET student by ID
const getStudentById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM students WHERE id = ?";

    db.execute(query, [id], (err, results) => {
        if (err) {
            console.log("FETCH BY ID Error:", err);
            return res.status(500).send(err.message);
        }

        if (results.length === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(results[0]);
    });
};



// DELETE student
const deleteStudent = (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM students WHERE id = ?";

    db.execute(query, [id], (err, result) => {
        if (err) {
            console.log("DELETE Error:", err);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log(`DELETE: Removed student ID ${id}`);
        res.status(200).send("Student deleted successfully");
    });
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
