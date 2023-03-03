import express from "express";

let router = express.Router();

import getAll from "../repositories/CourseRepository.js";

router.get("/getCourse", function(req, res){
    const course = getAll();
    return res.status(200).json(course);
});

export default router;