const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// File path for the CSV
const csvFilePath = path.resolve(__dirname, "form_data.csv");

// Initialize CSV File
const initializeCSVFile = () => {
    if (!fs.existsSync(csvFilePath)) {
        const headers = "First Name,Last Name,Email,Topic,Comment,Timestamp\n";
        fs.writeFileSync(csvFilePath, headers, "utf8");
        console.log("CSV file initialized.");
    } else {
        console.log("CSV file already exists.");
    }
};

// Append Data to CSV
const appendToCSV = (data) => {
    const row = `${data.firstName},${data.lastName},${data.email},${data.topic},${data.comment},${data.timestamp}\n`;
    fs.appendFileSync(csvFilePath, row, "utf8");
    console.log("Data successfully written to CSV:", data);
};

// Initialize CSV on server start
initializeCSVFile();

// Endpoint for Form Submission
app.post("/submit-form", (req, res) => {
    const { firstName, lastName, email, topic, comment } = req.body;

    if (!firstName || !lastName || !email || !topic || !comment) {
        console.error("Invalid data received:", req.body);
        return res.status(400).send({ message: "All fields are required." });
    }

    const data = {
        firstName,
        lastName,
        email,
        topic,
        comment,
        timestamp: new Date().toISOString(),
    };

    console.log("Data received:", data);

    try {
        appendToCSV(data);
        res.status(200).send({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Error saving data to CSV:", error);
        res.status(500).send({ message: "Failed to save form data." });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
