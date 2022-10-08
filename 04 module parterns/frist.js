counter=function(arr)
{
    return 'there ara'+arr.length+'in array';
}
 GetMyBrithday =function(day,month,year){
    return `The brithday is ${day} and month is ${month}and finally ${year}`;
}
var name='harshana navod';


module.exports={

   count : counter,
   brith : GetMyBrithday,
   namee : name,


}
