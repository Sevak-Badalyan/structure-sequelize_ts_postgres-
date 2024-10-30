
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'postgres', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || 'dev123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: (msg: string) => {
        if (msg.startsWith('Executing')) {

            return;
        }
    
        console.log(msg);
    },


});

export default sequelize;
