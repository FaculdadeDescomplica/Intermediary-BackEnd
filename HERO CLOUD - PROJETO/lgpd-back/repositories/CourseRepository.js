import Course from "../models/Course.js";

function getAll() {
    const course = new Course(1, "BackEnd Disciplina");
    return course;
};

const factory = {
    getAll
};


export default factory;