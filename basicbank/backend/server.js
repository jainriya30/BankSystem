const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error is :: ",error);
    });

    const custRouter = require('./routes/cust');
    const transRouter = require('./routes/trans');
    
    app.use('/customers', custRouter);
    app.use('/transaction', transRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})