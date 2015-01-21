var Airport = function(){
	this.runway = [];
	this.capacity = 5;
	this.isFull = false;
};

Airport.prototype.landPlane = function(plane) {
	if(this.isFull === false){
		this.capacityChecker();
		this.runway.push(plane.land());}
	else{console.log("Runway full")}	
};

Airport.prototype.takeOffPlane = function(plane) {
	this.runway.pop(plane.fly());
};

Airport.prototype.capacityChecker  = function(){
	if(this.runway.length >= this.capacity){
		this.isFull = true
	};
};