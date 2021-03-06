const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require('mongoose');


require('dotenv').config();

const middleware = require('./middleware');
const logs = require('./api/logs');

const app = express();

app.use('/', require('./api/logs'))


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
       message: 'Oops, there is no message here'
    });

});
app.use('/api/logs', logs);

 //This is the Not Found Middleware 
app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 2020;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:2020`)
});
