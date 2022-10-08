

var events=require('events');
var util=require('util');

//var myEmiter= new events.EventEmitter();

// myEmiter.on('someEvents',function(msg){
//     console.log(msg)
// })


// myEmiter.on('showName',function(msg)
// {
//     console.log(msg)
// })

// myEmiter.emit('someEvents','Harshana');
// myEmiter.emit('showName','Harshana Navod');
var person=function(name){
    this.name=name;
}
util.inherits(person,events.EventEmitter)

var harshana=new person('Harshana');
var navod=new person('Navod');
var people=[harshana,navod]
people.forEach(function(person) {
    person.on('run',function(msg){

        console.log(person.name +msg);

    });
    person.on('go',function(msg){

        console.log(person.name +msg);

    });
    
});


harshana.emit('run','some one coming to home');
navod.emit('run','running fast');
navod.emit('go','running fast');














