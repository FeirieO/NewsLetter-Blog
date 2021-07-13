const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:2021',
}));

app.get('/', (req, res) => {
    res.json({
       message: 'Oops, there is no message here'
    })

});
  
app.use((req, res, next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
    stack: process.env.NODE.ENV === 'production' ? '' : error.stack,
    })
})

const port = process.env.PORT || 2020;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:2020`)
});
