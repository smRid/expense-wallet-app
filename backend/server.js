import express from 'express';
import dotenv from "dotenv"
import { initDB } from './config/db.js'; 
import ratelimiter from './middleware/rateLimiter.js';

import transactionsRoute from './routes/transactionsRoute.js';

dotenv.config();

const app = express();

//Middleware 
app.use(ratelimiter);
app.use(express.json()); // Middleware to parse JSON bodies

// custom middleware 
// app.use((req, res, next) => {
//     console.log("Hey we hit a request, the method is", req.method);
//     next()
// })

const PORT = process.env.PORT || 5001;



app.use('/api/transactions', transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:' + PORT);
    });
})