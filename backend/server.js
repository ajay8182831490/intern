require('dotenv').config();


const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.use(require("./src/user/Routes/userRoutes"));


app.use(require('./src/post/Routes/postRoutes'));

app.listen(3600, () => {
    console.log("Server is running on port 3600");
});
