//CommonJS , every file is module(by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternative-flavour')
require('./mind-grenade') //this runs because the function is already invoked inside the module (mind-grenade)

sayHi (names.kushal)
sayHi(names.raman)
sayHi('Kushal') 