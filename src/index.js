import http from "http";
import express from "express";
import studentRoutes from "./routes/student.routes.js";
import markRoutes from "./routes/mark.routes.js";
import subjectRoutes from "./routes/subject.routes.js"

const app = express();

app.use(express.json());

const server = http.createServer(app);
app.use((req,res,next)=>{
    console.log("middleware1"),
    req.user={
        id:1,
    }
    next();
})
app.use((req,res,next)=>{
    console.log("middleware2");
    if(req.body){
        next();
    }else{
           res.status(401).json({
      message:"Unauthorized. Access denied",
    })
  }
  next();
});
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.use("/students", studentRoutes);
app.use("/marks", markRoutes);
app.use("/subjects",subjectRoutes);

server.listen(8080, "localhost", () => {
    console.log("Server running at http://localhost:8080");
});


app.use((err,req,res,next)=>{
console.log(err);
  res.status(err?.statusCode ?? 500).json({
    message: err?.message ?? "something went wrong",
    success:false,
    data:null,
  })
})