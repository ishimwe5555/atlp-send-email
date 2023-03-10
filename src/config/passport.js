const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config()

//console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Do something with the user's profile
  }
));

module.exports = passport;
