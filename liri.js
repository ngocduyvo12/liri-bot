
require("dotenv").config();

//requires
var keys = require("./keys.js");
var Spotify = require(`node-spotify-api`);
var axios = require(`axios`);
var fs = require(`fs`);
var moment = require(`moment`)

//path to spotify keys
var spotify = new Spotify(keys.spotify);

//node inputs
var search = process.argv[2]; //search type, no need for slice since it is joined by dashes
var term = process.argv.slice(3).join("+") //search term. slice and join to make it readable


//use switch case to switch between cases of search
switch (search) {
    //use spotify npm for case spotify-this-song
    case "spotify-this-song":
        //set default term when no term entered
        if (!term) {
            term = "the sign ace of base"
        }
        //search using npm
        spotify.search({ type: 'track', query: term, limit: 1 })
            .then(function (response) {
                var divider = "----------------------- \n"
                console.log(`${divider}Song name: ${response.tracks.items[0].name} 
              \nArtist: ${response.tracks.items[0].album.artists[0].name} 
              \nAlbum: ${response.tracks.items[0].album.name}
              \nSong link: ${response.tracks.items[0].href} 
              `);

            })
            .catch(function (err) {
                console.log(err);
            });
        break;

    //use axios with bands in town api for cocert-this case
    case "concert-this":
        var divider = `\n------------------------\n`
        var concertURL = `https://rest.bandsintown.com/artists/${term}/events?app_id=codingbootcamp`
        axios.get(concertURL).then(function (response) {

            //convert datetime into MM/DD/YYYY format with moment:
            for (var i = 0; i < response.data.length; i++) {
                var dateTime = response.data[i].datetime;
                var dateFormat = "YYYY-MM-DDTHH:mm:ssZ"
                var dateConverted = moment(dateTime, dateFormat).format("MM/DD/YYYY")

                console.log(`Name of Venue: ${response.data[i].venue.name} \nVenue Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}, ${response.data[i].venue.country} \nDate of Event: ${dateConverted} ${divider}`)
            }
        })
}