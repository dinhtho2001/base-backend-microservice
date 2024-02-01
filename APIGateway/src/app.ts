import express, { json, urlencoded } from 'express';
import cors from 'cors';
import pino from 'pino';
import morgan from 'morgan';
import router from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const logger = pino();

const app = express();

app.use(cors());
app.use(express.json());

app.use(json());
app.use(
  urlencoded({
    extended: false,
  })
);

app.get('/', (req, res) => {
    res.send('/api -> route');
});

app.use('/api', router);

app.use(morgan('dev'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
