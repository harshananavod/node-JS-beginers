
//normal function
function sayhi(){
    console.log("hello");
}
sayhi();

//anonumous function

func= function()
{
    console.log("anonumous function");
}
func();


function parameterfunc(fun)
{
    fun();
}
parameterfunc(func);