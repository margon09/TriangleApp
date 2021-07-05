class TriangleWithPoints {
	constructor(sketch) {
		this.p = sketch
		this.posX1 = document.getElementById('side1_posX').value
		this.posY1 = document.getElementById('side1_posY').value
		this.posX2 = document.getElementById('side2_posX').value
		this.posY2 = document.getElementById('side2_posY').value
		this.posX3 = document.getElementById('side3_posX').value
		this.posY3 = document.getElementById('side3_posY').value
	}

	drawTriangle() {
		this.p.background(197)
		this.p.fill(255, 0, 0)
		this.p.stroke('#666666')
		this.p.strokeWeight(3)

		this.p.triangle(
			this.posX1,
			this.posY1,
			this.posX2,
			this.posY2,
			this.posX3,
			this.posY3
		)
		this.drawText()
		this.drawPoints()
	}
	drawText() {
		this.p.textFont('HelveticaNeue', 18)
		this.p.fill(0)
		this.p.noStroke()
		this.p.text('A', this.posX1.value, this.posY1.value)
		this.p.text('B', this.posX2.value, this.posY2.value)
		this.p.text('C', this.posX3.value, this.posY3.value)
	}

	drawPoints() {
		this.p.stroke(0)
		this.p.strokeWeight(1)
		this.p.fill(25, 55, 50, 80)
		this.p.circle(this.posX1.value, this.posY1.value, 7)
		this.p.circle(this.posX2.value, this.posY2.value, 7)
		this.p.circle(this.posX3.value, this.posY3.value, 7)
	}
}