module.exports = function Spit () {
	var nowDate = new Date();
	this.date = nowDate.getUTCDate() +'.'+ parseInt(nowDate.getMonth() + 1) +'.'+nowDate.getFullYear()
	this.save = function(db,reason){
		db.put(this.date, reason);
	}
	this.getSpitReasons = function(db, date, cb){
		var spits = []; // Spits is an array of spit objects, which contain date and reason properties
		db.createReadStream({start: date}) 
			.on('data', function(data){
				if (data.key === date){
					spits.push({date: data.key, reason: data.value});
				}
			})
			.on('error', function(err){
				cb(err);
			})
			.on('end', function(){
				cb(null, spits);
			})
	}
	return this;
}
