var Twit = require('twit');
var config = require('./config');
var env = require('dotenv').config()

var bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: config.timeout_ms
})


// bot.post('statuses/update', {status:'Bot Here!'}, function(err,data,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.text +"was tweeted");
//     }
// });

// bot.get('search/tweets', {q: '"blood required"',geocode:'13.0827,80.2707,250mi'},function(err,data,response){
//     if(err){
//         console.log(err);
//     }else{
//         data.statuses.forEach(function(s){
//             console.log(s.text);           
//             console.log(s.user.screen_name);
//             console.log('\n');
//         });
//       console.log(data.statuses.length); 
//     }
// })

var stream = bot.stream('statuses/filter',{track:'progressive web app, Angular 2'});

stream.on('tweet',function(tweet){
    console.log(tweet.text+'\n');
});
