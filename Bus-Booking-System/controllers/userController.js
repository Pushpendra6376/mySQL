const db = require('../utils/db-collection')

const addUser = (req,res)=>{
    const { name, email } = req.body;

    const query = `INSERT INTO users (name, email) VALUES (?, ?)`;

    db.execute(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error adding user", error: err });
        }

        return res.status(201).json({ message: "User added successfully", userId: result.insertId });
    });
    
}

const getAllUsers = (req, res) =>{
    const query = `SELECT * FROM users`;

    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching users", error: err });
        }

        return res.status(200).json(results);
    });

}

module.exports = {
    addUser,
    getAllUsers
}