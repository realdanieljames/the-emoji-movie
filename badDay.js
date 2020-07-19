// run with node badDay.js
// pull in array from day.js on each file location
const day =  require('./day.js')

//badDay.js goes through an array from start to end, 
// displaying each array item  for one second
//then move to the next.
// give me an array
// i display each array item for one second each.

// for loop i
//one line gunction
//conol.log('hi')

let counter = 0
const badDay = function(){
    
    console.clear()
    console.log(day[counter])
    
    counter = counter + 1
}


//      run node
//  give function [badDay] to setInterval

setInterval(badDay,1000)