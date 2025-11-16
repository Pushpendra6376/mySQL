const db = require('../utils/db-collection');

// INSERT student
const addStudent = (req, res) => {
    const { name, email, age } = req.body;

    const query = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";

    db.execute(query, [name, email, age], (err) => {
        if (err) {
            console.log("INSERT Error:", err);
            return res.status(500).send(err.message);
        }

        console.log(`INSERT: Added student -> ${name}`);
        res.status(201).send(`Student ${name} added successfully`);
    });
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

// UPDATE student
const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const query = "UPDATE students SET name=?, email=?, age=? WHERE id=?";

    db.execute(query, [name, email, age, id], (err, result) => {
        if (err) {
            console.log("UPDATE Error:", err);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log(`UPDATE: Student ${id} updated`);
        res.status(200).send("Student updated successfully");
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
