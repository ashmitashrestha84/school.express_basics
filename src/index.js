import http from "http";
import express from "express";
import studentRoutes from "./routes/student.routes.js";
import markRoutes from "./routes/mark.routes.js";

const app = express();

app.use(express.json());

const server = http.createServer(app);

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
        success: true,
    });
});

app.use("/students", studentRoutes);
app.use("/marks",markRoutes);

server.listen(8080,"localhost", () => {
    console.log(`Server is running on http://localhost:8080`);
});