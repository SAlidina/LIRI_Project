# LIRI_Project

## Liri Bot Homework #10 Project

**About**

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

**What It Does**

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

**Bands In Town API**

Use:

node liri.js concert-this <artist/band name here>

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
   
**Spotify API**

Use:

node liri.js spotify-this-song <song name here>
   
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
     
 If no song is provided then your program will default to "The Sign" by Ace of Base.
 
 **OMBD API**
 
 Use:
 
 node liri.js movie-this <movie name here>
   
 * Title of the movie.
 * Year the movie came out.
 * IMDB Rating of the movie.
 * Rotten Tomatoes Rating of the movie.
 * Country where the movie was produced.
 * Language of the movie.
 * Plot of the movie.
 * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


**Demonstration**
![Demonstration Gif](WorkingGif.gif)