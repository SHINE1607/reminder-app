const express = require('express');
const router =  express.Router();
//Rental is an instance of the class schema that has allits methods defined
const Reminder = require('../model/reminder');





router.get('', (req,res) =>{
    //the callbvack function will called when the response from the database 
    Reminder.find({}, (err, foundReminders) =>{
        //sends a JSON response of the rentals 
        res.json(foundReminders);
      
   })
});

router.post('/create', (req, res)=>{
    const { description, year, month, day, hour, minute } = req.body;
    console.log(req.body)
    const reminder = new  Reminder({ description, year, month, day, hour, minute });
    //pushing the new reminder to the DB
    reminder.save((err) =>{
        //to work with the mongosoe errors, helpers directory is craeted and mongoose.js file is added
        if(err){
            return res.status(422).send({error : "Error in storing data to Db"})
        }
        return res.json({"register": true});
    });})



//exporting the module 
module.exports = router;