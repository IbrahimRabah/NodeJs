var Emitters = require('events')
var utils = require('util')

var MyFunc = new Function();

utils.inherits(MyFunc,Emitters)

MyFunc.prototype.greet = function(data){
  this.emit('eventfired', data)
}
var customFun = new MyFunc();

customFun.on('eventfired', function(data){
  console.log('Your Name is: ' + data)
});

customFun.greet('Prahim');