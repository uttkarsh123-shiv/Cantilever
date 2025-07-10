const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.route')
const newsRoutes = require('./routes/news.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

module.exports = app;