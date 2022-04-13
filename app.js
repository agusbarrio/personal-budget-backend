const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//routes
app.use(require('./routes/index.js'));
app.use('/api/operations', require('./routes/operations.js'));

//error 404
app.use(function (req, res, next) {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});
