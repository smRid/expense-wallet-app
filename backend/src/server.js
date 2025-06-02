import express from 'express';
import dotenv from "dotenv"
import { initDB } from './config/db.js'; 
import ratelimiter from './middleware/rateLimiter.js';

import transactionsRoute from './routes/transactionsRoute.js';
import job from './config/cron.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'production') job.start();

//Middleware 
app.use(ratelimiter);
app.use(express.json()); // Middleware to parse JSON bodies

// custom middleware 
// app.use((req, res, next) => {
//     console.log("Hey we hit a request, the method is", req.method);
//     next()
// })

const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "API is running smoothly!" });
});

app.use('/api/transactions', transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:' + PORT);
    });
})