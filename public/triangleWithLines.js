class TriangleWithLines {
	constructor(sketch) {
		this.p = sketch
		// sides work as radius
		this.sideA = document.getElementById('sideA1')
		this.sideB = document.getElementById('sideB1')
		this.sideC = document.getElementById('sideC1')

		this.w = windowWidth
		this.h = windowHeight
		this.circles = []

		this.radiusSideA = this.sideA.value
		this.radiusSideB = this.sideB.value
		this.radiusSideC = this.sideC.value

		// starting pos for a point
		this.posX = 120
		this.posY = 200

		this.circle1 = {
			stroke: this.p.stroke(255),
			diameter: this.radiusSideA * 2,
			posX: this.posX,
			posY: this.posY
		}
		this.circle2 = {
			stroke: this.p.stroke(255),
			diameter: this.radiusSideB * 2,
			posX: this.posX + Number(this.radiusSideC),
			posY: this.posY
		}

		this.pointOneX = 0
		this.pointOneY = 0
	}

	drawCircle() {
		this.p.strokeWeight(1)
		this.p.fill(225, 25, 110, 15)
		this.p.circle(this.circle1.posX, this.circle1.posY, this.circle1.diameter)

		this.p.fill(225, 155, 100, 55)
		this.p.circle(this.circle2.posX, this.circle2.posY, this.circle2.diameter)

		// center of the circles
		//this.p.noStroke()
		this.p.stroke(255, 0, 0)
		this.p.fill(25, 55, 50, 80)
		this.p.circle(this.circle1.posX, this.circle1.posY, 10)
		this.p.circle(this.circle2.posX, this.circle2.posY, 10)

		// side C
		this.p.stroke(2)
		this.p.line(
			this.circle1.posX,
			this.circle1.posY,
			this.circle2.posX,
			this.circle2.posY
		)
	}

	getIntersection() {
		let circleA = this.circle1

		let circleB = this.circle2

		let radiusA = this.circle1.diameter / 2
		let radiusB = this.circle2.diameter / 2

		let dx = circleB.posX - circleA.posX
		let dy = circleB.posY - circleA.posY

		let distance = Math.hypot(dx, dy)
		if (distance <= radiusA + radiusB) {
			this.drawIntersection(radiusA, radiusB, distance, dx, dy, circleA)
		}
	}

	drawIntersection(sideA, sideB, sideC, dx, dy, myCircle) {
		// Finding intersection points (distance = sideC; sideA and sideB - radiuses), dx and dy are used to caculate angle correction. The angles are in radians

		// 1. squared sides
		let aSquare = Math.pow(sideA, 2)
		let bSquare = Math.pow(sideB, 2)
		let cSquare = Math.pow(sideC, 2)

		// 2. find cos A (angle between sides A and C, where C - distance)
		let cosineA = (aSquare - bSquare + cSquare) / (2 * sideA * sideC)

		// correction angle of rotation
		let angleOfRotation = Math.acos(cosineA)

		// primary andgle - circles´ rotation towards each other
		let angleCorrection = Math.atan2(dy, dx)

		// INTERSECTION COORDINATES
		// POINT_1 - TOP
		this.pointOneX =
			myCircle.posX + Math.cos(angleCorrection - angleOfRotation) * sideA
		this.pointOneY =
			myCircle.posY + Math.sin(angleCorrection - angleOfRotation) * sideA
		// POINT_2 - BOTTOM
		this.pointTwoX =
			myCircle.posX + Math.cos(angleCorrection + angleOfRotation) * sideA
		this.pointTwoY =
			myCircle.posY + Math.sin(angleCorrection + angleOfRotation) * sideA

		// 3. drawing intersection points
		this.p.fill('#666677')
		this.p.stroke(255)
		this.p.strokeWeight(1)
		this.p.circle(this.pointOneX, this.pointOneY, 10) // top circle intersection point
		this.p.circle(this.pointTwoX, this.pointTwoY, 10) // bottom circle intersection point

		// drawing triangle
		this.p.fill('#0da7bb')
		this.p.stroke('#666666')
		this.p.strokeWeight(2)
		this.p.triangle(
			myCircle.posX,
			myCircle.posY,
			this.pointOneX,
			this.pointOneY,
			this.circle2.posX,
			this.circle2.posY
		)
		// SIDES in Text
		this.p.textFont('HelveticaNeue', 12)
		this.p.noStroke()
		this.p.fill(0)
		this.p.text(
			'B',
			(this.pointOneX + this.circle2.posX) / 2,
			(this.pointOneY + this.circle2.posY) / 2
		)
		this.p.text(
			'A',
			(myCircle.posX + this.pointOneX) / 2 - 7,
			(myCircle.posY + this.pointOneY) / 2
		)
		this.p.text(
			'C',
			(myCircle.posX + this.circle2.posX) / 2,
			(myCircle.posY + this.circle2.posY) / 2
		)
	}

	displayTriangle() {
		this.drawCircle()
		this.getIntersection()
	}
}
