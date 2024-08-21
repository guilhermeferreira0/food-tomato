import mongoose from 'mongoose';

const uri = process.env.MONGODB_URL as string;

// if (uri) throw new Error('ENV MONGODB_URL undefined');

export async function connectDb() {

  try {
    await mongoose.connect(uri);
  } catch(e) {
    console.log('Connect MongoDB ERROR: ' + e);
  } finally {
    // await mongoose.disconnect();
  }
}

