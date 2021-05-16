let defaultSidesBtn = true
let coordinatesBtn = false
let sidesBtn = false
let drawSideA = false

let myp5 = sketch => {
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 462))

		// access to the button defined in HTML (only id)
		let btnDraw = sketch.select('#myAngleBtn')
		btnDraw.mousePressed(drawTrianglefromAngle)

		let btn1 = sketch.select('#btn1')
		btn1.mouseClicked(hideDefault)
		btn1.mousePressed(defaultSides)

		let btn2 = sketch.select('#btn2')
		btn2.mouseClicked(hideCoordinates)
		btn2.mousePressed(coordinates)

		let btn3 = sketch.select('#btn3')
		btn3.mousePressed(twoSides)
		btn3.mouseClicked(hideSides)
	}

	// when btn pressed the triangle will be drawn
	function drawTrianglefromAngle() {
		const lineTriangle1 = new TriangleWithTwoLines(sketch)
		lineTriangle1.drawSideA()
		drawSideA = true
	}

	function defaultSides() {
		defaultSidesBtn = true
		if (defaultSidesBtn) {
			coordinatesBtn = false
			sidesBtn = false
		}
	}
	function coordinates() {
		coordinatesBtn = true
		if (coordinatesBtn) {
			defaultSidesBtn = false
			sidesBtn = false
		}
	}

	function twoSides() {
		sidesBtn = true
		if (sidesBtn) {
			defaultSidesBtn = false
			coordinatesBtn = false
		}
	}

	sketch.draw = () => {
		sketch.background(197)
		// depending on the pressed button, the sketch will be re-drawn
		if (defaultSidesBtn) {
			const threeLinedTriangle = new TriangleWithLines(sketch)
			threeLinedTriangle.displayTriangle()
		} else if (coordinatesBtn) {
			const pointTriangle = new TriangleWithPoints(sketch)
			pointTriangle.drawTriangle()
		} else {
			const lineTriangle = new TriangleWithTwoLines(sketch)
			if (drawSideA) {
				lineTriangle.drawSideA()
			}
			lineTriangle.displayTriangle()
		}
	}
}
let mySketch = new p5(myp5, 'p5sketch')
