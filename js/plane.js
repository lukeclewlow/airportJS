var Plane = function() {
	this.isFlying = true;
};

Plane.prototype.land = function() {
	this.isFlying = false;
};

Plane.prototype.fly = function() {
	this.isFlying = true;
};