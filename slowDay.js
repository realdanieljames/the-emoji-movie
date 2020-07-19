const badDay = require('./badDay.js')
const day = require('./day.js')

let counter = 0
const slowDay = function(){
    
    console.clear()
    console.log(day[counter])
    
    counter = counter + 1
}

setInterval(slowDay,3000)