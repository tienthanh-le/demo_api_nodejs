const express = require('express');

//const logger = require('./middleware/logger');
const PORT = process.env.PORT || 5000;

const datas = require('./test_database');

const app = express();

// Init middleware
//app.use(logger)

// Body-parser Middleware for POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API Routes
app.use('/api', require('./routes/api/api_routes'));

//Login Routes

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));