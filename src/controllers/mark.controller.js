const marks=[];

export const getAll=(req,res)=>{
    // const query= req.query;
    // console.log(query);
    res.status(200).json({
        message:'Marks of student',
        success:"true",
        marks:marks,
    })
}

export const getbyID=(req,res)=>{
    const {s_id}=req.params;
    const mark=marks.find((mark)=>mark.s_id===Number(s_id));
    if(!mark){
        res.status(404).json({
            message:'Marks of student failed',
            success:false,
            data:null,
        })
        return;
    }
    res.status(200).json({
        message:'Marks of student',
        success:"true",
        marks:mark,
    })
};

export const create=(req,res)=>{   
    const {math,science,english}=req.body;
    marks.push({
        s_id:marks.length+1,
        math,
        science,
        english,
        createdAt: Date.now(),
    });
    res.status(200).json({
        message:'Marks of student created',
        success:"true",
        marks:marks[marks.length-1],
    })
};

export const update=(req,res)=>{
    const {s_id}=req.params;
    const {math,science,english}=req.body;
    const index=marks.findIndex((mark)=>mark.s_id=== Number(s_id));
    if(index === -1){
        res.status(404).json({
            message:"user update failed",
            success: false,
            data:null,
        });
        return;
    };
    marks[index]={
        ...marks[index],
        math,
        science,
        english,
    }
    res.status(200).json({
        message:'Marks of student updated',
        success:true,
        data:marks[index],
    })
};

export const remove=(req,res)=>{
    const {s_id}=req.params;
    const index=marks.findIndex((mark)=> mark.s_id===Number(s_id));
    if(index=== -1){
    res.status(404).json({
        message:"user deleted",
        success:"true",
        data:null,
    });
    return;
}
    res.status(200).json({
        message:'Marks of student deleted',
        success:true,
        marks:null,
    })
    marks.splice(index,1);
};