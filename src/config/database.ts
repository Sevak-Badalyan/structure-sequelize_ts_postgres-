
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'your_db_name', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || 'your_db_password', {
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
