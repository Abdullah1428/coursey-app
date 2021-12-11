import express from 'express';
import cors from 'cors';
import path from 'path';

import courseRoutes from './routes/courseRoutes.js';
import authroutes from './routes/authRoutes.js';

const app = express();

// for parsing requests
app.use(express.json());

app.use(cors());

// authentication routes
app.use('/auth', authroutes);

// api routes
app.use('/api', courseRoutes);

// Static assets for production deployment
if (process.env.NODE_ENV === 'production') {
  // Define the static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'build', 'index.html'));
  });
}

// export app
export { app };
