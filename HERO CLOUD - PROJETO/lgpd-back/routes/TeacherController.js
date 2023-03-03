import express from "express";
let router = express.Router();
import teacherRepository from "../repositories/TeacherRepository.js";

router.post("/addTeacher", async function(req, res){
    const teacherModel = {
        name: req.body.name,
        course_id: req.body.course_id
    }
    const teacher = await teacherRepository.saveTeacher(teacherModel);
    return res.status(201).json(teacher);
});

router.get("/getAllTeachers", async function(req, res){
    const allTeachers = await teacherRepository.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teacher/:id", async function (req, res) {
    const teacher = await teacherRepository.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function (req, res) {
    const teacher = await teacherRepository.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function (req, res) {
    const teacherModel = {
        name: req.body.name,
        course_id: req.body.course_id
    };

    const teacher = await teacherRepository.updateTeacherById(req.params.id, teacherModel);
    return res.status(200).json(teacher);
});

export default router;