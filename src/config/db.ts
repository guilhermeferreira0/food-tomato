import mongoose from 'mongoose';

const uri = "mongodb+srv://guilhermefsilva23:qdwmsaWOQpmam4Di@cursojs.m2ldexu.mongodb.net/food_tomato?retryWrites=true&w=majority&appName=cursojs";

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

