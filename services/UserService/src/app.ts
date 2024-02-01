import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/userRoute';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to User Service');
});

app.use('/users', userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
