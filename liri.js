
require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require(`node-spotify-api`)

var spotify = new Spotify(keys.spotify);


var search = process.argv[2]; //search type, no need for slice since it is joined by dashes
var term = process.argv.slice(3).join(" ")

switch (search){
    case "spotify-this-song":
        if(!term){
            term = "the sign ace of base"
        }
            spotify.search({ type: 'track', query: term, limit: 1 })
            .then(function(response) {
              console.log(`
              Song name: ${response.tracks.items[0].name} 
              \nArtist: ${response.tracks.items[0].album.artists[0].name} 
              \nAlbum: ${response.tracks.items[0].album.name}
              \nSong link: ${response.tracks.items[0].href} 
              `);

            })
            .catch(function(err) {
              console.log(err);
            });
            break;
    case "concert-this":
        
}