import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import sequelize from './config/database';
import morgan from 'morgan';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use('/api', userRoutes);
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        await sequelize.sync(); 
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error); 
    }
};

startServer();
