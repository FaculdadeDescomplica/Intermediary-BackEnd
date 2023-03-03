import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Evaluation = sequelize.define('Evaluation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Evaluation;