const https = require ('https')
const url = 'https://api.darksky.net/forecast/23f0179a24403f32f1ff1297d379a858/40,-75?units=si'

const request = https.request(url, () => {
    let data = ''

    response.on('data', (chunk)=> {
        data = data + chunk.toString()
        console.log(chunk)
    })
    reponse.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error',error)
})
request.end()