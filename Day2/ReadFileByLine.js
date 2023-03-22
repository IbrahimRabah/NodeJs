var fileSystem = require('fs');
var readLine = require('readline');

var r = readLine.createInterface({
    input: fileSystem.createReadStream('data.json'),
    crlfDelay: Infinity
});

r.on('line',function(line){
    console.log(line)
})