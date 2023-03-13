import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Evaluation = sequelize.define('evaluation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{ underscored : true });

export default Evaluation;