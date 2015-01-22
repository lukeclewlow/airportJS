var Airport = function(){
	this.runway = [];
	this.capacity = 5;
	this.isFull = false;
	this.weather = ["Sunny", "Stormy"]
};

Airport.prototype.landPlane = function(plane) {
	if(this.isFull === false){
		this.capacityChecker();
		this.runway.push(plane.land());}
	else{return "Runway full"}	
};

Airport.prototype.takeOffPlane = function(plane) {
	this.runway.pop(plane.fly());
};

Airport.prototype.capacityChecker  = function(){
	if(this.runway.length >= this.capacity){
		this.isFull = true
	};
};

Airport.prototype.weatherForecast = function(){
	console.log(this.weather[Math.floor(Math.random() * this.weather.length)])
};

