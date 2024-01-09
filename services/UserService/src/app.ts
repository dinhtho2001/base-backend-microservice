import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/userRoute';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to User Service');
});

app.use('/users', userRouter);
app.use(morgan('dev'));

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
