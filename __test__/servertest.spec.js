import { getGeoData } from '../src/server/server'
import { getPictureData } from '../src/server/server'
import { getWeatherData } from '../src/server/server'

const serverfunc = require('../src/server/server')
    
test('the data returned by GeoData', () => {
    return getGeoData('Mumbai').then(data => {
    expect(data.statusCode).toBe(200);
    });
});

test('the data returned by WeatherData', () => {
    return getWeatherData("19.07283", "72.88261").then(data => {
        expect(data.statusCode).toBe(200);
    });
});

test('the data is PictureData', () => {
    return getPictureData('Mumbai').then(data => {
    expect(data.statusCode).toBe(200);
    });
});