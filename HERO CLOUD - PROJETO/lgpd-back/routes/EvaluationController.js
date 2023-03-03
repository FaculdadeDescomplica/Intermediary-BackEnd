import express from "express";
let router = express.Router();
import getAll from "../repositories/EvaluationRepository.js";

router.get("/getEvaluation", function(req, res){
    const evaluation = getAll();
    return res.status(200).json(evaluation);
});

router.post("/evaluation", function(req, res){

});

export default router;