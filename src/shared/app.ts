import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import helmet from 'helmet';
import morgan from 'morgan';

import { router } from '@routes/index';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE }));
app.use(router);

export default app;
