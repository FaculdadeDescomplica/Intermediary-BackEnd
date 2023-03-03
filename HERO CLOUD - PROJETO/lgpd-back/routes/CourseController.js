import express from "express";
let router = express.Router();
import courseRepository from "../repositories/CourseRepository.js";

router.post("/addCourse", function(req, res){
    const courseModel = {
        name: req.body.name,
    }
    const course = courseRepository.saveCourse(courseModel);
    return res.status(201).json(course);
});

router.get("/getAllCourses", async function(req, res){
    const allCourses = await courseRepository.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/course/:id", async function (req, res) {
    const course = await courseRepository.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function (req, res) {
    const course = await courseRepository.deleteCourseById(req.params.id);
    return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function (req, res) {
    const courseModel = {
        name: req.body.name,
    };

    const course = await courseRepository.updateCourseById(req.params.id, courseModel);
    return res.status(200).json(course);
});


export default router;