# About this project
This project contains the following items:
* `extension.json`: A custom analytics integration for Optimizely X web that uses front-end instance of Full Stack to send an equivalent Full Stack event whenever X Web fires a track Events
* `app.js`: A simple node webserver, built with expressjs, that serves a test page with a Full Stack user ID cookie. This cookie is utilized by the Full Stack integration to ensure that front end events are properly attributed to full stack experiments

# How to use

## Running the test site
* `git clone` this repo
* run `npm install`
* change the snippet in `index.html` to a personal project
* update `datafile.json` with the contents of your own full stack datafile
* run `node app.js` in the terminal

## Using the extension
* Create a new analytics integration from JSON, using the contents of `extension.json`
* Update the API key to a personal full stack project in the integration settings
* Create a new test targeting `localhost:3000`
* Create events in your full stack project that match the names of your web Events
* Run the test. There is log output in the javascript console to confirm the integation is working
