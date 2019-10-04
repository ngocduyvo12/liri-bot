# liri-bot

This app is designed to use 3 different api to look up specific information. By entering different command after `node liri.js` the user can look up different things.

![video of app working](https://youtu.be/gCqkXm71aws)

The app can be run through git bash:
1. Use git bash to navigate to the root folder
2. open the liri.js with node: node liri.js
3. enter one of the three specified search term: node liri.js <search>
search Terms: 
* spotify-this-song
* concert-this
* movie-this
* do-what-it-says
4. Enter what you want to look up: node liri.js <search> <something>
5. Enjoy!

The app is made using three different apis. 
1. spotify-api
2. omdp api
3. band in town api

TO make sure everyone can use this app, I first have to initialize package.json and install my npm there. 

The NPM used in this app are:
1. node-spotify-api
2. axios
3. moment
4. dotenv
5. fs (built-in)

To use this app, spotify-key and spotify-secret are required. This can be obtained by going to spotify developer page and sign up. After you have obtained the keys and secret:
Replace the content of **var spotify = new Spotify(keys.spotify)** with
 **var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});** replace <your spotify client id> with your spotify-id and replace <your spotify client secret> with your secret. No quotes!

After I initialize all the required npm, I have to assign the input from **process.argv[2]** to a search variable and **process.argv[3]** to a term variable. Although in the case of term, *slice()* and *join()* was use to get more dynamic input. 

A boolean condition was set-up to make sure the user will always enter a valid input. If there is an input call function **callCommand()**.

Inside function **callCommand()**. Different search terms are being evaluated using switch. For each of the valid search term mentioned above, the app will get the term and reach out their respective api and get the desired information.

If there is no input or if the input is incorrect. The app will let the user know that the input is invalid.

This app is a personal project I made for coding bootcamp.