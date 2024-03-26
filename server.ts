import express from 'express';
import dotenv from 'dotenv';

const ContactRoutes = require('./routes/ContactRoutes');

dotenv.config();

const PORT = process.env.PORT || 8081;
const app = express();


app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.use('/api/contacts', ContactRoutes)

