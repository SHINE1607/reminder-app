const express  = require('express');
const FakeDb = require('./fake_db')
const mongoose =  require('mongoose');
const config = require('./config/dev');
const bodyParser = require("body-parser")
const reminderRoutes = require('./routes/reminderRoute');

const app = express();

const mongoNewpParser = {
    autoIndex: false,
    useNewUrlParser: true,
  };


  mongoose.connect(config.DB_URI,mongoNewpParser).then(()=>{
    // creating  an instance of  the FakeDb class

    const fakeDb = new FakeDb();
});

app.use(bodyParser.json());



app.use('/api/v1/reminder', reminderRoutes);




const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log('its working!!');
});