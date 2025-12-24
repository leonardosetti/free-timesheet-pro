const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    version: '2.2.0', 
    timestamp: Date.now(),
    message: 'Free Timesheet Pro Backend - FOSS'
  });
});

app.get('/api', (req, res) => {
  res.json({ 
    message: 'Free Timesheet Pro API v2.2',
    endpoints: ['/health', '/api/auth/register', '/api/horas']
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Free Timesheet Pro API v2.2 rodando em http://localhost:${PORT}`);
});
