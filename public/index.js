let exists = false

function calculateSide(a, b, c) {
	if (a <= b + c && b <= a + c && c <= a + b) {
		exists = true
		document.getElementById('txtValue').style.color = '#33737b'
		if (a == b && b == c) {
			document.getElementById('txtValue').innerHTML = 'equilateral' // 2, 2, 2
		} else if (a == b || a == c || b == c) {
			document.getElementById('txtValue').innerHTML = 'isosceles' // 3, 3, 8
		} else {
			document.getElementById('txtValue').innerHTML = 'scalene' // 3, 2, 6
		}
	} else {
		exists = false
		document.getElementById('txtValue').style.color = 'red'
		document.getElementById('txtValue').innerHTML =
			'this triangle does not exist, choose other lengths'
	}
}

function getCurrentSidesValue() {
	let sideA1 = document.getElementById('sideA1')
	let sideB1 = document.getElementById('sideB1')
	let sideC1 = document.getElementById('sideC1')

	calculateSide(
		Number(sideA1.value),
		Number(sideB1.value),
		Number(sideC1.value)
	)
}

isValidPoints = (x1, y1, x2, y2, x3, y3) => {
	console.log(x1, x2, x3, y1, y2, y3);
	//same X for all points
	if (x1 === x2 && x2 === x3)
		return false
	//same Y for all points
	if (y1 === y2 && y2 === y3)
		return false
	//2 or more points are the same
	if ((x1 === x2 && y1 === y2) || (x2 === x3 && y2 === y3) || (x3 === x1 && y3 === y1))
		return false
	//all points are on the same diagonal
	if ((x1 - x2) / (y1 - y2) === (x2 - x3) / (y2 - y3))
		return false
	return true
}

function getCurrentPointsValue() {
	let posX1 = document.getElementById('side1_posX').value
	let posY1 = document.getElementById('side1_posY').value
	let posX2 = document.getElementById('side2_posX').value
	let posY2 = document.getElementById('side2_posY').value
	let posX3 = document.getElementById('side3_posX').value
	let posY3 = document.getElementById('side3_posY').value

	if (isValidPoints(posX1, posY1, posX2, posY2, posX3, posY3)) {

		let A = Math.sqrt(
			Math.pow(Number(posX2 - posX1), 2) +
			Math.pow(Number(posY2 - posY1), 2)
		)
		//console.log('side A ', A)

		let B = Math.sqrt(
			Math.pow(Number(posX3 - posX2), 2) +
			Math.pow(Number(posY3 - posY3), 2)
		)
		//console.log('side B ', B)

		let C = Math.sqrt(
			Math.pow(Number(posX3 - posX1), 2) +
			Math.pow(Number(posY3 - posY1), 2)
		)
		//console.log('side C ', C)
		calculateSide(A, B, C)
	} else {
		exists = false
		document.getElementById('txtValue').style.color = 'red'
		document.getElementById('txtValue').innerHTML =
			'this triangle does not exist, choose other points'
	}
}

function getTwoSidesAndAngleValue() {
	let sideBvalue = document.getElementById('sideB')
	let sideCvalue = document.getElementById('sideC')
	let angleBCvalue = document.getElementById('angle')

	let sideB = Number(sideBvalue.value)
	let sideC = Number(sideCvalue.value)
	let angleBC = Number(angleBCvalue.value)

	let sideA = Math.sqrt(
		Math.pow(sideB, 2) +
		Math.pow(sideC, 2) -
		2 * sideB * sideC * Math.cos((angleBC * Math.PI) / 180) //  * Math.PI / 180 => to radians
	)
	calculateSide(Number(sideA), Number(sideB), Number(sideC))
}

// function getCurrentSidesValue() {
// 	let newSidesValue = 'sides'
// 	document.getElementById('txtValue').innerHTML = newSidesValue
// }

const x = document.querySelector('.hiddenContent') // default sides
const y = document.querySelector('.points')
const z = document.querySelector('.sides')

function hideDefault() {
	if (x.style.display !== 'block') {
		x.style.display = 'block'
		y.style.display = 'none'
		z.style.display = 'none'
	}
	//console.log('hideDefault')
}

function hideCoordinates() {
	if (y.style.display === 'none') {
		y.style.display = 'block'
		x.style.display = 'none'
		z.style.display = 'none'
	}
	//console.log('hideCoordinates')
}

function hideSides() {
	if (z.style.display === 'none') {
		z.style.display = 'block'
		x.style.display = 'none'
		y.style.display = 'none'
	}
	//console.log('hideSides')
}

//================ Active Buttons (changing bg color)
const btnContainer = document.getElementById('btnsId')
let btns = btnContainer.getElementsByClassName('btn')
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		let current = document.getElementsByClassName('active')
		current[0].className = current[0].className.replace(' active', '')
		this.className += ' active'
	})
}