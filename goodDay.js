const day =  require('./day.js')
const badDay = require('./badDay.js')


let counter = day.length-1
const goodDay = function(){
    
    console.clear()
    console.log(day[counter])
    
    counter = counter - 1
}

setInterval(goodDay,1000)   