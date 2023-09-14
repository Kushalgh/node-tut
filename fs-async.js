//File System Module (fs) 
//Used for file interaction
//Asynchronus approach

const {readFile,writeFile} = require('fs');//async syntax 

//In async approach we need to provide a callback
//We run that callback when we are done
//When we want to run that callback when our functionality is complete

//Read Async
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
readFile('./content/second.txt','utf8',(err,result)=> {
    if(err){
        console.log(err);
        return;
    }
    const second = result;

    //Write Aysnc
    writeFile(
        './content/result-async.txt',`Here is the result : 
         ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
         }
    )
    })
})

//in the abhove function the (err,result)=>{condition}is a callback function 
//that returns any error in the code else it returns the result

