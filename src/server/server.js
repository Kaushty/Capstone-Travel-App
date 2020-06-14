const express = require('express');
const fetch = require('node-fetch');
const port = 5000;

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(cors())

app.use(express.static('dist'));

const server = app.listen(port, function(){
    console.log(`Server running on localmachine port ${port}`)
});

// Declaring Constants
const programData = [];
let geoData = {};
let weatherData = [];
let pictureData = {};

// Declaring Error Status Code
// LOCATION_ERROR_CODE = 1001;
// WEATHER_ERROR_CODE = 2001;

// Declaring the APIs keys
const geo_username = 'lordskivine';
const weather_key = '109cc88a850847e4985e6b860ca1fabc';
const pixabay_key = '16994601-7d48e78fe627e9510f6c0d178';

// const picture_url = `https://pixabay.com/api/?key=${pixabay_key}&q=${country_name}&image_type=photo&pretty=true`;

// Helper Function
const getCountryPicture = async (country, ) => {
    const picture_url = `https://pixabay.com/api/?key=${pixabay_key}&q=${country}&image_type=photo&pretty=true`;
    const response = await fetch(picture_url)
    try{
        const country_pic = response.json();
        // Is response valid
        return country_pic
        // else return false
    }catch(error){
        console.log(`Error Out: Could not fetch Country Picture ${error}`);
    }
}

const getGeoData = async (place) => {
    // Function to fetch Geo-Co-ordinates
    console.log(':: Making Call to GeoName API::')
    const geoNames_URL = `http://api.geonames.org/searchJSON?name=${place}&maxRows=1&username=${geo_username}`;
    // console.log(geoNames_URL);
    try{
        const response = await fetch(geoNames_URL);
        const location_response = await response.json();
        console.log(location_response);

        const latitude = location_response.geonames[0].lat;
        const longitude = location_response.geonames[0].lng;
        const country_name = location_response.geonames[0].countryName;
        const population = location_response.geonames[0].population;

        return {
            lat: latitude,
            lng: longitude,
            countryName: country_name  
        };
    }
    catch(error){
        console.log(`Error Out: Could not fetch Geo-Location ${error}`);
        return error;
    }
}

const getWeatherData = async (lat, lng) => {
    console.log(" :: Making Call to Weather API ");
    const weather_url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${weather_key}`;
    try{
        const response = await fetch(weather_url)
        const weatherData = await response.json();
        return weatherData;
    }catch(error){
        console.log(`Error Out: Could not fetch weather data ${error}`);
        return error;
    }
}

const getPictureData = async (place) => {
    console.log(":: Making call to pixabay API");
    const picture_url = `https://pixabay.com/api/?key=${pixabay_key}&q=${place}&image_type=photo&pretty=true`;

    try{
        const result = await fetch(picture_url);
        const pictureData = await result.json()
        // Check if a relatable picture is returned or not
        //If not fetch for the country picture 
        // console.log(pictureData.hits);
        // country_pic = getCountryPicture(country)
        return pictureData;
    }catch(error){
        console.log(`Error Out: Could not fetch image ${error}`)
    }
}

app.post('/fetchData', fetchData);

async function fetchData(req, res){
    /*
    Function to fetch all data for the particular location.
    This function fetches all the data that'll needed on the client side.

    1. Starting with the Location Data
    2. Weather Data using Lat Long
    3. Picture for the country entered
    
    Save these data in the server 
    */
    const place = req.body.textInput;
    console.log(place);
    getGeoData(place).then((geoLocation) => {
        // console.log(geoLocation);     
        /*if(geoLocation == LOCATION_ERROR_CODE){
            return res.status(400).send({
                message: LOCATION_ERROR_CODE
            })
        }*/
        geoData = geoLocation;
        return geoData;
        }).catch((err) => {
            console.log(err+ " Error: Failed while fetching GeoLocation")
        })
        .then((result) => {
            getWeatherData(result.lat, result.lng).then((weather_res) => {
                console.log("WeatherData returned");
                weatherData = weather_res.data;
                console.log(weather_res.data[0]);
                return weatherData;
            }).catch((err)=>{
                console.log(err + " Error: After Weather API")
            })
            .then(() => {
                getPictureData(place).then((picture_res) => {
                    pictureData.pictureURL = picture_res.hits[0].largeImageURL;
                    console.log(pictureData);
                    return pictureData
                }).catch((err) => {
                    console.log(err + "Error: After Picture API")
                })           
                .then(() => {
                    const result_data = saveData(geoData, weatherData, pictureData)                    
                    console.log("programData loaded with values");
                    res.send({
                        statusCode: 200
                    });                   
                }).catch((err) => {
                    console.log(err + " Error: Could not send actual Data");
                    res.send({
                        statusCode: 500
                    });
                })
            })
        }).catch((err) => {
            console.log(err)
    });    
     
    // return res.status(200).send({
    //     message: SUCCESS_CODE,
    //     data: programData
    // });    
}
const saveData = function(geo, weather, picture){
    const data = {
        'statusCode': 200,
        'geoData': geo,
        'weatherData': weather,
        'pictureData': picture
    }
    programData.unshift(data);
    return programData[0];
}

const demo_data = {
    'statusCode': 500,
    'name': "Demo Data",
    'message': "This is a demo data"
}

app.get('/travel', (req, res) => {
    res.send(programData[0]);
})
