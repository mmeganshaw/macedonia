const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
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

app.post("/send", (req, res) => {
    const output = ` 
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Name: ${req.body.message}</li>
    </ul>
    `

    // nodemailer 

 // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usethisemailtosendemails@gmail.com', // example user
        pass: 'Emailandstuff12'  // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
      }
    
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <usethisemailtosendemails@gmail.com>', // sender address
      to: 'mmeganshaw@gmail.com', // list of receivers
      subject: 'Website Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with object, log error, else print confirm and redirect to thank you page
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.render('thankyou', {layout: false});
    }

  });


})

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)
})