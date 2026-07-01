import express from "express";
const subjects=[];

export const getAll=((req,res)=>{
    res.status(200).json({
        message:"Subject fetched successfully",
        success:true,
        data:subjects,
    })
})

export const getbyID=((req,res,next)=>{
    const {id}=req.params;
    const subject=subjects.find((subject)=>subject.id===Number(id));
    if(!subject){
        next({
            message:"subject fetched failed",
            statusCode:404,
        })
    }
    res.status(200).json({
        message:"subject fetched successed",
        success:true,
        data:subject,
    })
})

export const create=((req,res)=>{
    const{sub1,sub2,sub3}=req.body;
    subjects.push({
        id:subjects.length+1,
        sub1,
        sub2,
        sub3,
    });
    res.status(200).json({
        message:"subject",
        success:true,
        data:subjects[subjects.length-1],
    })
})

export const update=((req,res,next)=>{
    const {id}=req.params;
    const {sub1,sub2,sub3}=req.body;
    const index=subjects.findIndex((subject)=>subject.id===Number(id));
    if(index===-1){
        next({
            message:"subject update failed",
            statusCode:404,
        })
        return;
    }
    subjects[index]={
        ...subjects[index],
        sub1,
        sub2,
        sub3,
    }
    res.status(200).json({
        message:"subject updated",
        success:true,
        data:subjects[index],
    })
});

export const remove =((req,res,next)=>{
    const {id} = req.params;
    const index=subjects.findIndex((subject)=>subject.id===Number(id));
    if(index===-1){
        next({
            message:"subject delete failed",
            statusCode:404,
        })
        return;
    }
    subjects.splice(index,1);
    res.status(200).json({
        message:"subject delete succeed",
        success:true,
        data:null,
    })
}) 