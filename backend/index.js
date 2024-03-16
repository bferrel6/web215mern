import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Record } from "./models/recordModel.js";
import recordsRoute from './routes/recordsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
//app.use(cors());
// Option 2: Custom Origin
const prodOrigin = process.env.APP_URL;
const devOrigin = ['http://localhost:5173']
const allowedOrigins = process.env.NODE_ENV === 'production' ? prodOrigin : devOrigin
app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin)){
                // console.log(origin, allowedOrigins)
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Test CORS Policy');
});

app.use('/records', recordsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });