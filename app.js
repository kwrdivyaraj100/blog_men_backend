const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/user-routes.js");
const blogRouter = require("./routes/blog-routes.js");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);


mongoose
    .connect(
        "mongodb+srv://admin:divya@cluster0.utimwbh.mongodb.net/Blog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected TO Database and Listening TO Localhost 5000")
    )
    .catch((err) => console.log(err));