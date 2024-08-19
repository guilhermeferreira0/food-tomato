import { type Request, type Response } from 'express';
import { app } from './src/app';
import { connectDb } from './src/config/db';
import { foodRoute } from './src/routes/foodRoute';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Running Server! http://localhost:${port}`);
});

connectDb().then(res => {
  console.log("Successfully connected to MongoDB!");
});

// Api endpoints
app.use('/api/food', foodRoute);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello!1");
});
