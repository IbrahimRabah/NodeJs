var fileSystem = require('fs');

fileSystem.writeFile('info.txt', 'hello iti', (err) => {
  if (err) throw err;
  console.log('saved Successfully!');
});