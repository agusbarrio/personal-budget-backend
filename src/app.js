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
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./router/index.js'));
app.use('/api/operations', require('./router/operations.js'));

server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});
