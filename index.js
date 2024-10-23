import cors from 'cors';
import express from 'express';
import dbConnection from './database/config.js';
import authRouter from './routes/auth.js';
import eventsRouter from './routes/events.js';

const app = express();

const PORT = process.env.PORT || 4001;

//#region Database connection
dbConnection();
//#endregion

// CORS
app.use(cors());

// Public directory
app.use(express.static('public'));

// Body parse middleware
app.use(express.json());

//#region Routes
app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter);
//#endregion

// Healt route
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    msg: 'API is running',
  });
});

// Public content route
app.get('*', (req, res) => {
  const __dirname = import.meta.dirname;
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
