const fs = require ('fs')

// const dataBuffer = fs.readFileSync ('1-json.json')
// console.log(dataBuffer)
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


// const book = {
//     title : 'Ego is the Enemy',
//     author :'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)



// console.log(bookJSON)

// JSON.parse(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


 const dataBuffer = fs.readFileSync ('1-json.json')
 const dataJSON = dataBuffer.toString()
 const user = JSON.parse(dataJSON)

 user.name = 'Carl'
 user.age = 22

 const userJSON = JSON.stringify(user)
 fs.writeFileSync('1-json.json', userJSON)
