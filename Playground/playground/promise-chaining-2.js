require('../../task-manager/src/db/mongoose')
const Task = require ('../src/model/task')

// Task.findByIdAndDelete('id goes here').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed :false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('idmustbeinsterted').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})