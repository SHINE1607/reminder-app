const Reminder =  require('./model/reminder');

module.exports =  class FakeDb{
    constructor(){
        this.rentals = [{
                description: "Buy groceries",
                year:2019,
                month:8,
                day:12,
                hour:12,
                minute:45

            },
            {
                description: "Buy groceries",
                year:2019,
                month:8,
                day:12,
                hour:12,
                minute:45
            
                   
        },
            {
                description: "Buy groceries",
                year:2019,
                month:8,
                day:12,
                hour:12,
                minute:45
        }]

         
    }
}
