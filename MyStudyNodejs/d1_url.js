const url = require('url');

var api = "http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager?name=Simon&age=15";
var value = url.parse(api, true);
// console.log(value);

var param = value.query;
console.log(param);
console.log("Name: " + param.name + ", Age: " + param.age);
console.log(`Name: ${param.name}, Age: ${param.age}`);