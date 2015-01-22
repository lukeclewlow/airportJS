var Airport = function(){
	this.runway = [];
	this.capacity = 5;
	this.isFull = false;
	this.weather = ["Sunny", "Stormy"]
};

Airport.prototype.landPlane = function(plane) {
	if(this.isFull === false){
		this.capacityChecker();
			if(this.weatherForecast()==="Sunny") 
				{
				this.runway.push(plane.land());
			}
			else{
				return "Too stormy to land, keep circling!"
			};}
	else{
		return "Runway full"
	};
};

Airport.prototype.takeOffPlane = function(plane) {
	if(this.weatherForecast()==="Sunny") {
		this.runway.pop(plane.fly());
	}
	else {
		return "Too stormy for take off"
	}
};

Airport.prototype.capacityChecker  = function(){
	if(this.runway.length >= this.capacity){
		this.isFull = true
	};
};

Airport.prototype.weatherForecast = function(){
	console.log(this.weather[Math.floor(Math.random() * this.weather.length)])
};



