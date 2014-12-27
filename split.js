function Spit () {
	this.save = function(db,reason){
		var date = new Date('DD-MM-YYYY');
		db.put(date, reason);
	}
}