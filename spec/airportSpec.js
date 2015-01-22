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

	});



	describe("the airport", function() {

			beforeEach(function() { 
				for (i = 0; i < 6; i++){
					airport.landPlane(plane);
				}
			});

		it("should know when the runways full", function() {
			expect(airport.isFull).toEqual(true);
		});

		it("a plane cannot land when runway is full", function() {
			expect(airport.landPlane(plane)).toEqual("Runway full")
		});

	});



	describe("weather conditions", function() {

		it("should know when it's stormy", function(){
			spyOn(airport, 'weatherForecast').and.returnValue("Stormy")
			expect(airport.weatherForecast()).toEqual("Stormy")
		});

		it("a plane cannot take off when there is a storm a brewin", function() {
			airport.landPlane(plane)
			spyOn(airport, 'weatherForecast').and.returnValue("Stormy")
			expect(airport.takeOffPlane(plane)).toEqual("Too stormy for take off")
		});

		it("a plane cannot land when there is a storm a brewin", function() {
			spyOn(airport, 'weatherForecast').and.returnValue("Stormy")
			expect(airport.landPlane(plane)).toEqual("Too stormy to land, keep circling!")
		});
		
	});

});