function Spit () {
	this.save = function(db,reason){
		var date = new Date('DD-MM-YYYY');
		db.put(date, reason);
	}
	this.getSpitReasons = function(db, dateS, dateE, cb){
		var spits = []; // Spits is an array of spit objects, which contain date and reason properties
		db.createReadStream({start: dateS, end: dateE}) // Get data from dateS(tart) to DateE(nd)
			.on('data', function(data){
				spits.push({date: data.key, reason: data.value});
			})
			.on('error', function(err){
				cb(err);
			})
			.on('end', function(){
				cb(null, spits);
			})
	}
}