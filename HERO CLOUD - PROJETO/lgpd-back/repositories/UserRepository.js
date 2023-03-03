import User from "../models/User.js";


function getAll() {
    const user = new User(1, "Ana", "Teixeira", "acrispteixeira@gmail.com", "F");
    return user;
};

//1- salvar usuario

//2- buscar todos usuarios

//3- buscar por id

//4- deletar por id

//5- atualizar por id

const factory = {
    getAll
};


export default factory;