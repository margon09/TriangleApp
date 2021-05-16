class TriangleWithTwoLines {
	constructor(sketch) {
		this.p = sketch

		this.lengthSideB = document.getElementById('sideB')
		this.lengthSideC = document.getElementById('sideC')
		this.angle = document.getElementById('angle')

		this.sideB = this.lengthSideB.value
		this.sideC = this.lengthSideC.value
		this.myAngle = this.angle.value
		this.radiansAngle = this.p.radians(-this.myAngle)

		this.posX = 110
		this.posY = 250

		this.v0 = this.p.createVector(this.posX, this.posY) // base - starting posX, posY
		this.v1 = this.p.createVector(this.sideB, 0) // length of e.g. side B
		this.v2 = p5.Vector.fromAngle(this.radiansAngle, this.sideC) // length of e.g. side C with angle ß
	}

	drawCircle() {
		this.drawArrow(this.v0, this.v1, 'red')
		this.drawArrow(this.v0, this.v2, 'blue')
		this.myAngle = this.v1.angleBetween(this.v2)
		this.p.fill(0)
		this.p.noStroke()
		this.p.text(
			'angle cos β is : ' +
				this.myAngle.toFixed(2) +
				' radians or ' +
				this.p.degrees(this.myAngle).toFixed(2) +
				' degrees',
			10,
			10,
			90,
			50
		)

		// DRAWING ARC ANGLE BETWEEN SIDE B and C
		this.p.fill(0)
		this.p.text('β', this.v0.x + 10, this.v0.y - 5)
		this.p.textSize(16)
		this.p.noFill()
		this.p.stroke(0)
		this.p.strokeWeight(2)
		this.p.arc(this.posX, this.posY, 10, 10, this.myAngle, 0, this.radiansAngle)
		this.p.textSize(12)
		this.p.fill(0)
		//=========================
	}
	drawArrow(base, vec, myColor) {
		this.p.push()
		this.p.stroke(myColor)
		this.p.strokeWeight(3)
		this.p.fill(myColor)
		this.p.translate(base.x, base.y)
		this.p.line(0, 0, vec.x, vec.y)
		// this.p.rotate(vec.heading())
		this.p.pop()
	}

	drawSideA() {
		// ====================== Side A ==================== //
		// // draw points
		// this.p.stroke(0, 255, 0)
		// this.p.strokeWeight(10)
		// this.p.point(this.v2.x + this.posX, this.v2.y + this.posY) // side C
		// this.p.point(this.v0.x + Number(this.sideB), this.v0.y) // side B
		// this.p.point(this.v0.x, this.v0.y) // side A

		// // draw triangle
		this.p.fill('#0da7bb')
		this.p.stroke('#666666')
		this.p.strokeWeight(2)
		this.p.triangle(
			this.v0.x,
			this.v0.y,
			this.v0.x + Number(this.sideB),
			this.v0.y,
			this.v2.x + this.posX,
			this.v2.y + this.posY
		)

		// Draw side A
		// this.p.stroke(0, 255, 0)
		// this.p.strokeWeight(2)
		// this.p.line(
		// 	this.v0.x + Number(this.sideB),
		// 	this.v0.y,
		// 	this.v2.x + this.posX,
		// 	this.v2.y + this.posY
		// )

		// // text A, B, C
		// this.p.fill(0)
		// this.p.noStroke()
		// this.p.text('B', this.v0.x + Number(this.sideB) / 2, this.v0.y + 15)
		// this.p.text('C', this.v2.x + Number(this.sideC), this.v2.y + this.posY)
		// this.p.text('A', this.v2.x + this.posX, this.v2.y + this.posY)
		// ====================== ======== ==================== //
	}

	displayTriangle() {
		// this.drawSideA()
		this.drawCircle()
	}
}
