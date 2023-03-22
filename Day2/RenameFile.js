var fileSystem = require('fs');

fileSystem.rename('test.txt', 'info.txt', function (err) {
  if (err) throw err;
  console.log('Done!');
});