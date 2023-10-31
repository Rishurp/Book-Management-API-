const express = require("express");
const mongoose = require("mongoose");
const booksRoute = require("./routes/books.route");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = 3000;
const URL = process.env.Mongodb_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.error("Could not connect to the database");
    console.error(error);
  });

app.use(express.json());
app.use("/books", booksRoute);

app.get("/", (req,res)=>{
  res.send('<h1>This is the Home Page of Book Management. Use /books route to see the books .</h1>' )
});

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
