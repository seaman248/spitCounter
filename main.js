var Spit = require('./split.js'),
	level = require('level');

var spit = new Spit();

var db = level('./spitsdb');




if(process.argv[2] === 'get'){
		spit.getSpitReasons(db, process.argv[3], function(err, spits){
			if (err) throw err;
			console.log(spits);
		});
} else{
	spit.save(db, process.argv[2]);
	console.log('Spit saved at ' + spit.date);	
}

