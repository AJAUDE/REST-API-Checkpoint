// import express
const express = require("express");

// import mongoose
const mongoose = require("mongoose");
const router = require("./routes");

// connect to database
mongoose.connect("mongodb+srv://michaelajaude:zico@cluster0.pggh5ux.mongodb.net/blogcollection?retryWrites=true&w=majority")
    .then(() => {
            console.log("connected to database");
            // create an express app instance 
            const app = express();

            // middleware
            app.use(express.json())
            // use router 
            // app.use("/api", router);
            app.use('/api', router)

            // listen on port 5030
            app.listen(5030, () => {
                console.log("server is running on port 5030.");
            });
    });
