const request = require('request');


const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d24b3fb44c3322c437b4b5cc49b6f64&query='+lat+','+lon+'&units=m'

    request({url, json : true}, (error, {body}) => {
        if (error)
        {
            callback('Error'+error,undefined)
        }
        else if (body.error){
            callback('Unable to find location ')
        }
        else {
            callback(undefined, 'The weather is '+body.current.weather_descriptions[0]+'. The Temperature is ' + body.current.temperature + '°c. and the precipitation  is '+body.current.precip+ '% But it feels like ' +body.current.feelslike+'°')
       
        }
       
        })

}



module.exports =  forecast 