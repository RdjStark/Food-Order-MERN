const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mern123:mern123@food-ordering.fiiff.mongodb.net/food-order?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const dbConnection = mongoose.connection;
dbConnection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const ordersRouter = require('./routes/orders');
const menuRouter = require('./routes/menu');

app.use('/orders', ordersRouter);
app.use('/menu', menuRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
