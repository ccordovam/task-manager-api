const request = require ('request')

const geocode = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/23f0179a24403f32f1ff1297d379a858/' + latitude + ',' + longitude +'?units=si'
    
    request ({url, json : true}, (error,{body}) =>{
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another search!', undefined)
        }else{
            callback(undefined, 
                console.log(body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain' )
                )
        }
    })
}
module.exports = forecast