const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const middleware = require('./middleware');

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
 //This is the Not Found Middleware 
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 2020;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:2020`)
});
