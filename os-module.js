
const os = require('os') 

//info about current user

const user = os.userInfo();
console.log(user)


//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)


//built-in os module that provides various methods to inform about the system
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
