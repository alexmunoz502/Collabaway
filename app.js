const express = require('express');
const app = express();
const port = 3000;

// Load Handlebars
const handlebars = require('express-handlebars');

// Initialize Handlebars Engine
app.set('view engine', 'hbs');

// Configure Handlebars
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'));

// Routing
// HOME
app.get('/', (req, res) => {
    res.render('home', {layout : 'index'});
});

// INSTAGRAM
app.get('/instagram', (req, res) => {
    res.render('instagram', {layout : 'index'});
});

app.listen(port, () => console.log(`App listening on port ${port}`));