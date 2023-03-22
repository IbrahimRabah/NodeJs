var fileSystem = require('fs');

fileSystem.mkdir('PrahimDirectory', (err) => {
  if (err) throw err;
  console.log('Created Successfully!');
});