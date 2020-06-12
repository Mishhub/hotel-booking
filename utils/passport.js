const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../app/user/schema')

const opts = {
    jwtFromRequest : ExtractJwt.fromHeader('auth'),
    secretOrKey : process.env.code,
}

passport.use('jwt',new JwtStrategy(opts, (jwt_payload, done )=> {
    try{
        User.findOne({_id: jwt_payload.userid}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                    done(null, user);
            } else {
                done(null, false);
            }
        });
    }
    catch(err){
        done(err)
    }
}));

