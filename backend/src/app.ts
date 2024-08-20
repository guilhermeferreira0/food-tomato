import express from "express";
import cors from 'cors';

class App {
  private readonly express = express();

  configs() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: true}));
    this.express.use(cors());
  }

  start() {
    this.configs();
    return this.express;
  }
}

export const app = new App().start();