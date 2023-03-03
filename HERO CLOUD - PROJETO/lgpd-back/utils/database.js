import Sequelize from 'sequelize';

const sequelize = new Sequelize (
    'lgpd-database',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamp: false
        }
    }
);

export default sequelize;