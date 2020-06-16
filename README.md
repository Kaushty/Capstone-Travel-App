# Travel-App
### Capstone project for Udacity's Front-End Nanodegree Program - Travel App

## Table of Contents
* [Overview](#overview)
* [Instructions](#instructions)
* [Working](#working)
* [Resources](#built)
* [Author](#author)

## Overview 
Travel App is a single page application that aims to help users plan their trip ahead of time.
This app uses Webpack a module bundler, as a build tool to bundle all the assets and dependencies involved in the webapp.
It also makes use of service workers to save a cached version of the page which would be displayed should the server / internet not be available.


## Instructions 
* Clone or Fork the repository into your local machine.
* Install all the dependencies as mentioned in the package.json file by runing the command `npm install`.
* To lauch the website using Webpack development server, run the command `npm run build-dev`. This command will open the webpage on localhost:8081. Note that by launching the website using Webpack's development server, the user won't be able to make use of the webapp's functionalities.
* Make sure to add your own API keys wherever required.
* To build the production version of the website run the command `npm run build-prod`. This will create a new directory named `dist` containing distribution / production files for express to use.
* To test the Javascript files present in the client module, run `npm test`. This would run the jest script to verify the functionality of the JS script.
* To launch the webapp on the Node server run the command `npm start`. This would open an instance of the webapp on localhost port 5000.

## Working
Travel App asks the user to enter the name of the city to which he wants to travel along with the date of travel, then by using a combination of 3 APIs it fetches relevant information regarding the place. The information includes
* Country Information
* Current weather conditions
* 6 Day future weather forecast
* And a relevant picture of that location

## Built using
* Node.js
* Express.js
* Webpack 
* Jest
* Geonames API
* Weatherbit API
* Pixabay API

## Author
Kaushik M. Shetty
