import http from "http";
import express from "express";
import studentRoutes from "./routes/student.routes.js";
import markRoutes from "./routes/mark.routes.js";

const app = express();

app.use(express.json());

const server = http.createServer(app);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.use("/students", studentRoutes);
app.use("/marks", markRoutes);

server.listen(8080, "localhost", () => {
    console.log("Server running at http://localhost:8080");
});
