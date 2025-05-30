import express from 'express';
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Its working! 123');
});

const PORT = process.env.PORT || 5001;

console.log("my port:",process.env.PORT);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
})