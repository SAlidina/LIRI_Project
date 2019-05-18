require("dotenv").config();

const keys = require("./keys.js");
const fs = require('fs');
var cmnd = process.argv[2];
var input = process.argv[3];
const Spotify = require('node-spotify-api');
const axios = require("axios");

//using moment.js
const moment = require('moment');
moment().format();




if (cmnd === "spotify-this-song") {
    spotify(input);
}
if (cmnd === "movie-this") {
    movie(input);
}
if (cmnd === "concert-this") {
    concert(input);
}
if (cmnd === "do-what-it-says") {
    doItSays();
}

function spotify(input) {
    if (!input) {
        input = "The Sign";
    }
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);

        }
        var dTI = data.tracks.items;
        var songData = [
            "Artists: " + dTI[0].artists[0].name,
            "Song Name: " + dTI[0].name,
            "Preview Link: " + dTI[0].preview_url,
            "Album: " + dTI[0].album.name].join("\n\n");
        console.log(songData);
    });

}

function movie(input) {
    if (!input) {
        input = 'Mr Nobody';
    }
    var URL = "http://www.omdbapi.com/?t=" + input + "&apikey=5281a849";
    axios
        .get(URL)
        .then(function (response) {
            var short = response.data
            var movieData = [
                "Title: " + short.Title,
                "Year: " + short.Year,
                "IMBD Rating: " + short.imbdrating,
                "Rotten Tomatoes Rating: " + short.Ratings[1].Value,
                "Country where the movie was produced: " + short.Country,
                "Language: " + short.Language,
                "Plot: " + short.Plot,
                "Actors: " + short.Actors].join("\n\n");

            console.log(movieData);

        })

}

function concert(input) {
    var artist = input;

    var concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios
            .get(concertURL)
            .then(function (response) {
                var short = response.data[0];
               var concertData = [
                   "Venue Name: "+short.venue.name,
                   "Venue Location: "+short.venue.city + "," +short.venue.region,
                   "Date: " + moment(short.datetime).format('L')
               ].join("\n\n");
               console.log(concertData);
            })
    }
function doItSays(){
    fs.readFile("random.txt", "utf8", function(err,data){
        if (err){
            return console.log(err);
        }
    var output = data.split(",");
    if (output[0] === "spotify-this-song"){
        var newText = output[1].slice(1,-1);
        spotify(newText);
    }
    if (output[0] === "movie-this") {
        var newText = output[1].slice(1,-1);
        movie(newText);
    }
    if (output[0]==="concert-this"){
        var newText = output[1].slice(1,-1);
        concert(newText);
    }
   

    })
}