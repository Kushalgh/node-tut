const path = require('path')

console.log(path.sep)//returns a platform specific seperator
const filePath = (path.join('/content','subfolder','test.txt'))//joins the path
console.log(filePath)

const base = path.basename(filePath) //gives the base of the path
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)//path with directory name