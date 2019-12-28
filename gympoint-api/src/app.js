import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(err);
      }

      return res.status(500).json({ error: 'Erro interno do servidor' });
    });
  }
}

export default new App().server;
