const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.engine("handlebars", exphbs())
app.set("view engine", 'handlebars');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) => {
    res.render('home', {layout: false});
})
app.get('/faqs', (req, res) => {
    res.render('faqs', {layout: false});
})

app.get('/location', (req, res) => {
    res.render('location', {layout: false});
})

app.get('/pricing', (req, res) => {
    res.render('pricing', {layout: false});
})

app.get('/contact', (req,res) => {
    res.render('contact', {layout: false});
})

app.get('/thank-you', (req,res) => {
    res.render('thankyou', {layout: false});
})


app.listen(PORT, function () {
    console.log('listening on port ' + PORT)
})