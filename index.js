const express = require('express');
require('dotenv').config();
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware untuk parsing json
app.use(express.json());

// routes
app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})