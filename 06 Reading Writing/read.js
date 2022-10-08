var fs=require('fs');
//using syncronouns
var Readme=fs.readFileSync('my.txt','utf8');

console.log(Readme);

fs.writeFileSync('writme.txt',Readme);

//using asyncronouns
fs.readFile('my.txt','utf8',function(err,data){
    console.log(data);
})

console.log('before run method this working');


    fs.writeFile('newtxt.txt',Readme,function(err)
    {

    }
    );