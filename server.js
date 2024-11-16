const express = require('express');
const engine = require('express-handlebars').engine;
const path = require('path');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/faqs', (req, res) => {
    res.render('faqs');
});

app.get('/pricing', (req, res) => {
    res.render('pricing');
});

app.get('/location', (req, res) => {
    res.render('location');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/thank-you', (req, res) => {
    res.render('thankyou');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
})