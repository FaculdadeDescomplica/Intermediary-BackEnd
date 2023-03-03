import express from "express";
let router = express.Router();
import evaluationRepository from "../repositories/EvaluationRepository.js";

router.post("/addEvaluation", function(req, res){
    const evaluationModel = {
        user_id: req.body.user_id,
        course_id: req.body.course_id,
        concept: req.body.concept
    }
    const evaluation = evaluationRepository.saveEvaluation(evaluationModel);
    return res.status(201).json(evaluation);
});

router.get("/getAllEvaluations", async function(req, res){
    const allEvaluations = await evaluationRepository.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/evaluation/:id", async function (req, res) {
    const evaluation = await evaluationRepository.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function (req, res) {
    const evaluation = await evaluationRepository.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.put("/updateEvaluation/:id", async function (req, res) {
    const evaluationModel = {
        user_id: req.body.user_id,
        course_id: req.body.course_id,
        concept: req.body.concept
    };

    const evaluation = await evaluationRepository.updateEvaluationById(req.params.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;