const data = require('./data.js')
const fn = require('./../getEmailAddresses.js')

const result = fn.getEmailAddresses(data.arrayOfObjects);
console.log(result);