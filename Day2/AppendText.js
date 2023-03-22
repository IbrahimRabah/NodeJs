var fileSystem = require('fs');

fileSystem.appendFile('test.txt', 'Hello!!', function (err) {
  if (err) throw err;
  console.log('Saved Successfully !!!');
});