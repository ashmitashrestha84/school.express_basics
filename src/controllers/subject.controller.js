import express from "express";
const subjects=[];

export const getAll=((req,res)=>{
    res.status(200).json({
        message:"Subject fetched successfully",
        success:true,
        data:subjects,
    })
})

export const getbyID=((req,res)=>{
    const {id}=req.params;
    const subject=subjects.find((subject)=>subject.id===Number(id));
    if(!subject){
        res.status(404).json({
            message:"subject fetched failed",
            success:false,
            data:null,
        })
    }
    res.status(200).json({
        message:"subject fetched successed",
        success:true,
        data:subject,
    })
})

export const create=((req,res)=>{
    const{id,sub1,sub2,sub3}=req.body;
    subjects.push()={
        id=subjects.length+1,
        sub1,
        sub2,
        sub3,
    }
    res.status(200).json({
        message:"subject",
        success:true,
        data:subjects[subjects.length-1],
    })
})

export const update=((req,res)=>{
    const {id}=req.params;
    const {id,sub1,sub2,sub3}=req.body;
    const index=subjects.findIndex((subject)=>subject.id===Number(id));
    if(!index){
        res.status(404).json({
            message:"subject update failed",
            success:false,
            data:null,
        })
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

export const remove =((req,res)=>{
    const {id} = req.params;
    const index=subjects.findIndex((subject)=>subject.id===Number(id));
    if(!index){
        res.status(404).json({
            message:"subject delete failed",
            success:false,
            data:null,
        })
    }
    subjects.splice(index,1);
    res.status(200).json({
        message:"subject delete succeed",
        success:true,
        data:null,
    })
}) 