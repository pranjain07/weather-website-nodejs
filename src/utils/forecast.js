const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0bb433ce4176349e1c6db35417fef34f/' + latitude + ',' + longitude
     request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const summary = '"' +body.daily.data[0].summary+ '"'
            const temp = "Temperature: " + body.currently.temperature + '°F'
            const rain = "Rain: " +body.currently.precipProbability + '%' 
            const hum =  "Humidity: " +body.currently.humidity
            const wind = "Windspeed: " +body.currently.windSpeed
            const temph = "High: " +body.daily.data[0].temperatureHigh + '°F' 
            const templ = "Low: " +body.daily.data[0].temperatureLow + '°F' 
            const pressure =  "Pressure: " +body.daily.data[0].pressure 
            callback(undefined, {
                                sum: summary,
                                temp: temp,
                                rain: rain,
                                hum: hum,
                                wind: wind,
                                temph: temph,
                                templ: templ,
                                pressure: pressure
                        })
        }
    })
}

module.exports = forecast