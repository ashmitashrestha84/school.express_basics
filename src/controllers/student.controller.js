const students = [];

export const getAll=(req, res) => {
    res.status(200).json({
        message: "Students fetched successfully",
        success: true,
        data: students,   //empty array
    });
};

export const getbyID=(req, res) => {
    const { id } = req.params;

    const student = students.find(
        student => student.id === Number(id)
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

export const update = (req, res) => {
    const { id } = req.params;
    const { name, faculty } = req.body;
    const index = students.findIndex(
        student => student.id === Number(id)
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
};

export const remove=(req,res)=>{
       const {id}=req.params;
       const index=students.findIndex((student)=> student.id=== Number(id));
       if(index===-1){
            res.status(404).json({
            message:"user not found",
            success:false,
            data:null,
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