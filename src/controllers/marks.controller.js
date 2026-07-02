import mongoose from "mongoose";
const marks=[];
const markSchema=new mongoose.Schema({
    math:{
        type:Number,
        required:true,
        min:0,
        max:100,
    },
    science:{
         type:Number,
        required:true,
        min:0,
        max:100,
    },
    english:{
         type:Number,
        required:true,
        min:0,
        max:100,
    },
},{timestamps:true});
const Mark=mongoose.model('mark',markSchema);

export const getAll=async(req,res,next)=>{
    // const query= req.query;
    // console.log(query);
    try{
    res.status(200).json({
        message:'Marks of student',
        success:"true",
        marks:marks,
    })
}
catch(err){
    next(err);
}
}

export const getbyID=async(req,res,next)=>{
    try{
    const {s_id}=req.params;
    const mark= await Mark.findOne({s_id});
    if(!mark){
        next({
            message:'Marks of student fetch failed',
            statusCode:404,
        })
        return;
    }
    res.status(200).json({
        message:'Marks of student',
        success:"true",
        marks:mark,
    })
}
catch(err){
    next(err);
}
}
export const create=async(req,res,nexy)=>{   
    try{
    const {math,science,english}=req.body;
    const mark = await Mark.create({
        math,
        science,
        english,
    });
    res.status(200).json({
        message:'Marks of student created',
        success:"true",
        marks:mark,
    })
}
catch(err){
    next(err);
}
}

export const update=async(req,res,next)=>{
    try{
    const {s_id}=req.params;
    const {math,science,english}=req.body;
    const mark=await Mark.findByIdAndUpdate(
        s_id,
    {
        math,
        science,
        english,
    },
    {
    new:true,
    runValidators:true,
    })
    if(!mark){
        next({
            message:"user update failed",
            statusCode:404,
        });
        return;
    };

    res.status(200).json({
        message:'Marks of student updated',
        success:true,
        data:mark,
    })
}
catch(err){
    next(err);
}
}

export const remove=async(req,res,next)=>{
    try{
    const {s_id}=req.params;
    const mark= await Mark.findByIdAndDelete(s_id);
    if(!mark){
    next({
        message:"marks deleted",
        statusCode:404,
    });
    return;
}
    res.status(200).json({
        message:'Marks of student deleted',
        success:true,
        marks:matk,
    });
}
catch(err){
    next(err);
};
};