
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require("express");
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const cookiepaerser = require('cookie-parser');
const flash = require('connect-flash');
const ejsMate = require('ejs-mate');
const app = express();

const UserRoutes = require('./routes/users');


app.use(express.json());
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cookiepaerser());
app.use(express.urlencoded({ extended: true }));




//app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());

app.use((req, res, next) => {
    
    next();
})
app.use('/',UserRoutes)
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
