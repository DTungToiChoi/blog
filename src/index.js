const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// Cấu hình handlebars
app.engine('hbs', exphbs.engine(
  {
    extname: '.hbs'
  }
)); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Middleware
app.use(morgan('combined'));

// Route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});


// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
