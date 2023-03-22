var fileSystem = require('fs');

fileSystem.unlink('info.txt', function (err) {
  if (err) throw err;
  console.log('File Removed Successfully!');
});