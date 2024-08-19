import { type Request, type Response } from 'express';
import { app } from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Running Server! http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send("Hello!1");
});