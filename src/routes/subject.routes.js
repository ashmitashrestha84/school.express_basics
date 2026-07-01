import http from "http";
import express from "express";
import { getAll,getbyID,create,update,remove } from "../controllers/subject.controller.js";

const router= express.Router();

router.get("/",getAll);

router.get("/:id",getbyID);

router.post("/",create);

router.put("/:id",update);

router.delete("/:id",remove);

export default router;