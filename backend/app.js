import express from 'express';
import cors from 'cors';

import courseRoutes from './routes/courseRoutes.js';

const app = express();

// for parsing requests
app.use(express.json());

app.use(cors());

app.use('/api', courseRoutes);

// Static assets for production deployment
if (process.env.NODE_ENV === 'production') {
  // Define the static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    const path = require('path');
    res.sendFile(path.resolve(__dirname, 'frontend' + 'build' + 'index.html'));
  });
}

// export app
export { app };
