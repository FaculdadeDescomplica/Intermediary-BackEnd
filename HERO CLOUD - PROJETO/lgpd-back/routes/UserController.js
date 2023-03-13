import express from "express";
let router = express.Router();
import userRepository from "../repositories/UserRepository.js"

//1- salvar usuario
router.post("/addUser", async function (req, res) {
    const userModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }
    const user = await userRepository.saveUser(userModel);
    return res.status(201).json(user);
});

//2- buscar todos usuarios
router.get("/getAllUsers", async function (req, res) {
    const allUsers = await userRepository.getAllUsers();
    return res.status(200).json(allUsers);
});

//3- buscar por id
router.get("/user/:id", async function (req, res) {
    const user = await userRepository.getUserById(req.params.id);
    return res.status(200).json(user);
});

//4- deletar por id
router.delete("/deleteUser/:id", async function (req, res) {
    const user = await userRepository.deleteUserById(req.params.id);
    return res.status(200).json(user);
});

//5- atualizar por id
router.put("/updateUser/:id", async function (req, res) {
    const userModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    };

    const user = await userRepository.updateUserById(req.params.id, userModel);
    return res.status(200).json(user);
});

export default router;