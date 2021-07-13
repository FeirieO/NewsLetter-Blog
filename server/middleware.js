//This is the Not Found Middlewar
const notFound = (req, res, next) =>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
 //general error handler(middleware)
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
    stack: process.env.NODE.ENV === 'production' ? '' : error.stack,
    })
};

module.exports = {
    notFound,
    errorHandler,
};