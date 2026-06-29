import express from "express";
const router= express.Router();
import { getAll,getbyID,create,update,remove } from "../controllers/mark.controller.js";

router.get("/",getAll);

router.get("/:s_id",getbyID);

router.post("/",create);

router.put("/:s_id",update);

router.delete("/:s_id",remove);

export default router;