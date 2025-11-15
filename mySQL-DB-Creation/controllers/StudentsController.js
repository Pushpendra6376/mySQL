const db = require('../utils/db-collection');

// GET all students
const getstudentsData = (req, res) => {
    const query = "SELECT * FROM students";

    db.execute(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }

        res.status(200).json(results);
    });
};

// GET student by ID
const getstudentsDataById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM students WHERE id = ?";

    db.execute(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }

        if (results.length === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(results[0]);
    });
};

// INSERT student
const addEntries = (req, res) => {
    const { email, name } = req.body;
    const insertQuery = "INSERT INTO students (email, name) VALUES (?, ?)";

    db.execute(insertQuery, [email, name], (err) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }

        res.status(200).send(`Student ${name} successfully added`);
    });
};

// UPDATE student by ID
const updatingEntries = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updateQuery = "UPDATE students SET name = ? WHERE id = ?";

    db.execute(updateQuery, [name, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).send("Student has been updated");
    });
};

// DELETE student by ID
const deleteStudentById = (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM students WHERE id = ?";

    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).send("Student deleted successfully");
    });
};

module.exports = {
    getstudentsData,
    addEntries,
    updatingEntries,
    deleteStudentById,
    getstudentsDataById
};
