const express = require('express');
const userRouter = require('./src/routes/userRoutes');
const connectDB = require('./src/config/dbConnect');
connectDB();
const app = express();
const PORT = process.env.PORT || 7000;

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
