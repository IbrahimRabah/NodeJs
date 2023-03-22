var fileSystem = require('fs');
var content = fileSystem.readFileSync('data.json', 'utf8');
console.log(content);