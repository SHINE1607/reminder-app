const mongoose = require('mongoose');
//schema class  from the mongoose
const Schema = mongoose.Schema;

const reminderSchema = new Schema(
    {
        //here the we defing the struture of our colection or schema  
        description : {
            type : String, 
            required : true, 
            //here we are entring the max number of charecterss and the error message 
            max :[120, 'Too long for the title:/']},
        year : {
            type:  Number,
            required : true    
            },
        month : {
            type:  Number,
            required : true    
            },
        day : {
            type:  Number,
            required : true    
            },
        hour : {
            type:  Number,
            required : true    
            },
        minute : {
            type:  Number,
            required : true    
            },    
    }
);


module.exports = mongoose.model('Reminder',reminderSchema);
