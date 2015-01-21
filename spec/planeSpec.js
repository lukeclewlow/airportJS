describe("Plane", function() {

	var plane;

	beforeEach(function() {
  plane = new Plane();
	});

	describe("a plane", function() {

		it("is flying when created", function() {
			expect(plane.isFlying).toEqual(true);
		});

		it("has flying status when in the air", function() {
			plane.fly()
			expect(plane.isFlying).toEqual(true);
		});

		it("doesn't have flying status when landed", function() {
			plane.land()
			expect(plane.isFlying).toEqual(false);
		});

	});

});