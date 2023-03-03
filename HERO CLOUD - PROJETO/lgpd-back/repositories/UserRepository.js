import User from "../models/User.js";

function getAll() {
    const user = new User(1, "Ana", "Teixeira", "acrispteixeira@gmail.com", "F");
    return user;
};

const factory = {
    getAll
};


export default factory;