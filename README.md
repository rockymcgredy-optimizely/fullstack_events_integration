# About this project

## Use Case
The provided integration allows you to easily send an event to the Optimizely Full Stack results page. Using the Optimizely Full Stack Javascript SDK, in conjunction with an Optimizely X Web TrackEvent listener, it's possible to send a Full Stack event each time the X Web client tracks an event.

## Project Contents
* `extension.json`: A custom analytics integration for Optimizely X web that uses front-end instance of Full Stack to send an equivalent Full Stack event whenever X Web tracks an event.
* `app.js`: A simple node webserver, built with expressjs, that serves a test page with a Full Stack user ID cookie. This cookie is utilized by the Full Stack integration to ensure that front end events are properly attributed to full stack experiments

# How to use
*note:* Follow the below steps in order

## Running the test site
* `git clone` this repo
* run `npm install`
* change the snippet in `index.html` to a personal project
* update `datafile.json` with the contents of your own full stack datafile
* run `node app.js` in the terminal

## Using the extension
* Create a new analytics integration from JSON, using the contents of `extension.json`:
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/using_json.png)
* Update the API key to a personal full stack project in the integration settings
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/sdkKey.png)
* Create a new test targeting `http://localhost:3000`
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/url_targeting.png)
* Create events in your full stack project that match the names of your web Events
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/clicked_checkout_web.png)
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/clicked_checkout_fullstack.png)
* Run the test. There is log output in the javascript console to confirm the integration is working
![Screenshot](https://raw.githubusercontent.com/rockymcgredy-optimizely/fullstack_events_integration/master/public/images/console_log.png)
