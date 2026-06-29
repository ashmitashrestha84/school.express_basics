import http from "http";
import express from "express";

const app = express();

app.use(express.json());

const server = http.createServer(app);

// Arrays
const students = [];
const marks = [];

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
        success: true,
    });
});


// ===================== STUDENT ROUTES =====================

// Get all students
app.get("/students", (req, res) => {
    res.status(200).json({
        message: "Students fetched successfully",
        success: true,
        data: students,
    });
});

// Get student by ID
app.get("/students/:id", (req, res) => {
    const { id } = req.params;

    const student = students.find(
        (student) => student.id === Number(id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
            success: false,
            data: null,
        });
    }

    res.status(200).json({
        message: "Student fetched successfully",
        success: true,
        data: student,
    });
});

// Create student
app.post("/students", (req, res) => {
    const { name, faculty } = req.body;

    students.push({
        id: students.length + 1,
        name,
        faculty,
        createdAt: Date.now(),
    });

    res.status(201).json({
        message: "Student created successfully",
        success: true,
        data: students[students.length - 1],
    });
});

// Update student
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, faculty } = req.body;

    const index = students.findIndex(
        (student) => student.id === Number(id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found",
            success: false,
            data: null,
        });
    }

    students[index] = {
        ...students[index],
        name,
        faculty,
    };

    res.status(200).json({
        message: "Student updated successfully",
        success: true,
        data: students[index],
    });
});

// Delete student
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    const index = students.findIndex(
        (student) => student.id === Number(id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found",
            success: false,
            data: null,
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        success: true,
        data: null,
    });
});


// ===================== MARKS ROUTES =====================

// Get all marks
app.get("/marks", (req, res) => {
    res.status(200).json({
        message: "Marks fetched successfully",
        success: true,
        data: marks,
    });
});

// Get marks by student ID
app.get("/marks/:s_id", (req, res) => {
    const { s_id } = req.params;

    const mark = marks.find(
        (mark) => mark.s_id === Number(s_id)
    );

    if (!mark) {
        return res.status(404).json({
            message: "Marks not found",
            success: false,
            data: null,
        });
    }

    res.status(200).json({
        message: "Marks fetched successfully",
        success: true,
        data: mark,
    });
});

// Create marks
app.post("/marks", (req, res) => {
    const { math, science, english } = req.body;

    marks.push({
        s_id: marks.length + 1,
        math,
        science,
        english,
        createdAt: Date.now(),
    });

    res.status(201).json({
        message: "Marks created successfully",
        success: true,
        data: marks[marks.length - 1],
    });
});

// Update marks
app.put("/marks/:s_id", (req, res) => {
    const { s_id } = req.params;
    const { math, science, english } = req.body;

    const index = marks.findIndex(
        (mark) => mark.s_id === Number(s_id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Marks not found",
            success: false,
            data: null,
        });
    }

    marks[index] = {
        ...marks[index],
        math,
        science,
        english,
    };

    res.status(200).json({
        message: "Marks updated successfully",
        success: true,
        data: marks[index],
    });
});

// Delete marks
app.delete("/marks/:s_id", (req, res) => {
    const { s_id } = req.params;

    const index = marks.findIndex(
        (mark) => mark.s_id === Number(s_id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Marks not found",
            success: false,
            data: null,
        });
    }

    marks.splice(index, 1);

    res.status(200).json({
        message: "Marks deleted successfully",
        success: true,
        data: null,
    });
});



server.listen(8080,"localhost", () => {
    console.log(`Server is running on http://localhost:8080`);
});