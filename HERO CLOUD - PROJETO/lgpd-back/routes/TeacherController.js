import express from "express";
let router = express.Router();
import getAll from "../repositories/TeacherRepository.js";

router.get("/getTeacher", function(req, res){
    const teacher = getAll();
    return res.status(200).json(teacher);
});

export default router;