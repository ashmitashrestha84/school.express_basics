const students = [];

export const getAll=(req, res) => {
    res.status(200).json({
        message: "Students fetched successfully",
        success: true,
        data: students,   //empty array
    });
};

export const getbyID=(req, res,next) => {
    const { id } = req.params;
    const student = students.find((student) => student.id === Number(id));
    if (!student) {
        next({
            message: "Student not found",
            statusCode:404,
        });
    }
    res.status(200).json({
        message: "Student fetched successfully",
        success: true,
        data: student,
    });
};

export const create=(req, res) => {
    const { name, faculty } = req.body;

    students.push({
        id: students.length + 1,
        name,
        faculty,
        createdAt: Date.now(),
    });


    res.status(200).json({
        message: "Student created successfully",
        success: true,
        data: students[students.length-1],
    });
};

export const update = (req, res,next) => {
    const {id} = req.params;
    const {name, faculty} = req.body;
    const index = students.findIndex((student) => student.id === Number(id));
    if (index === -1) {
        next({
            message: "Student not found",
            statusCode:404,
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
};

export const remove=(req,res,next)=>{
       const {id}=req.params;
       const index=students.findIndex((student)=> student.id=== Number(id));
       if(index===-1){
           next({
            message:"user not found",
            statusCode:404,
        })
        return;
       }
       students.splice(index,1);
    res.status(200).json({
        message: "Student deleted successfully",
        success: true,
        data: null,
    });
};