var fs =require('fs');
//---------------syncronouns function-------------
fs.mkdirSync('hello new folder');


//fs.rmdirSync('hello new folder');

//-----------------asyncronouns function---------------------

fs.mkdir('new folder',function(){
    console.log('folder has beeen create');
})

console.log('before create this run');

fs.rmdir('new folder',function(){

    console.log('folder has been deleted');

})