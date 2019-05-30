/* eslint-disable no-undef */
const request = require('request');

forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/21d94e476cca36f2ed2a15dd3d9ec216/' +
    latitude +
    ',' +
    longitude +
    '?units=si';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,

        body.daily.data[0].summary +
          ' It is currently ' +
          body.currently.temperature +
          '℃' +
          ' There is ' +
          body.currently.precipProbability +
          '%' +
          ' chance of rain'
      );
    }
  });
};

module.exports = forecast;
