//File System Module (fs) 
//Used for file interaction
//Synchronus approach

const {readFileSync,writeFileSync} = require('fs');

//Reading a file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

//Writing a file
//node creates a file automatically if the file is not in the path
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}` ,
    {flag: 'a'} //flafg: 'a' is for append
    //here since we are appending the same text the append flag repeats the
    //same value
    )

