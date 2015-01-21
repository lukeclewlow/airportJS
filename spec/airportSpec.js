describe("Airport", function() {

	var airport;

	beforeEach(function() {
  	airport = new Airport();
	});

	beforeEach(function() {
		plane = new Plane();
	});

	describe("a plane", function(){

		it("should be able to land", function() {
			airport.landPlane(plane)
			expect(airport.runway.length).toEqual(1)
		});

		it("should be able to take off", function() {
			airport.landPlane(plane)
			airport.takeOffPlane(plane)
			expect(airport.runway.length).toEqual(0)
		});

	describe("the airport", function() {

			beforeEach(function() {
			airport.landPlane(plane);
			});

		it("should know when the runways full", function() {
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			expect(airport.isFull).toEqual(true)
		});

		it("a plane cannot land when runway is full", function() {
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			airport.landPlane(plane)
			expect(airport.landPlane(plane)).toEqual("Runway full")
		});
		
	});


	});



});