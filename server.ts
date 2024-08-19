import { type Request, type Response } from 'express';
import { app } from './src/app';
import { connectDb } from './src/config/db';
import { foodRouter } from './src/routes/foodRouter';
import { userRouter } from './src/routes/userRouter';
import { cartRouter } from './src/routes/cartRouter';
import 'dotenv/config';

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Running Server! http://localhost:${port}`);
});

connectDb().then(res => {
  console.log("Successfully connected to MongoDB!");
});

// Api endpoints
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({success: true, data: 'API Working'});
});
