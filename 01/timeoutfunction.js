setTimeout(function()  {
    console.log('after 3 second this will print ');
    
}, 3000);

var time=0;

var  timer=setInterval(function() {
    time+=1;
    console.log('2 min after this will print again' )
    if(time>=3)
    {
        clearInterval(timer)
    }




    
}, 2000);