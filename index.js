const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');
const cors = require('cors')
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use('/teams', teamRoutes);
app.use('/matches', matchRoutes);

// Start server
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
    app.on("error", (error) => {
      console.error(`Error ${error}`);
      throw error;
    })
  })
  .catch((error) => {
    console.log("Mongo db connection failed !!!", error);
  })
