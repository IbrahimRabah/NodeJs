var fileSystem = require('fs');
fileSystem.readFile('data.json', 'utf8', function(err, data){
	if(err) throw err;
	console.log(data)
})
console.log('done');