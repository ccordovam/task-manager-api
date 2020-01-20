const mongoose = require ('mongoose')

const taskSchema = new mongoose.Schema( {
    description : {
    type : String,
    required : true,
    trim : truew
} ,
completed  :{
    type : Boolean,
    default : false
},
owner : {
    tupe : mongoose.Schema.Types.ObjectID,
    required : true,
    ref :'User'

}
}, {
    timestamps : true
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task