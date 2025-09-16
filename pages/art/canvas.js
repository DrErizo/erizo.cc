const canvas = document.getElementById('doodles')
const ctx = canvas.getContext('2d')
resize()
let x = WIDTH / 2
let y = HEIGHT / 2
let prevX = x
let prevY = y
let angle = Math.random() * Math.PI * 2
let speed = 4.0
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = 3

function resize() {
	WIDTH = window.innerWidth
	HEIGHT = window.innerHeight
	canvas.width = WIDTH
	canvas.height = HEIGHT
}

function draw() {
	requestAnimationFrame(draw)

	angle += (Math.random() * 2 - 1) * 0.15
	x += Math.sin(angle) * speed
	y += Math.cos(angle) * speed

	if (x < 0) {
		x = 0
		angle = Math.random() * Math.PI * 2
	}
	if (y < 0) {
		y = 0
		angle = Math.random() * Math.PI * 2
	}
	if (x > WIDTH) {
		x = WIDTH
		angle = Math.random() * Math.PI * 2
	}
	if (y > HEIGHT) {
		y = HEIGHT
		angle = Math.random() * Math.PI * 2
	}
	let hue = (Date.now() / 30) % 360
	ctx.strokeStyle = `hsl(${hue},100%,60%`
	ctx.beginPath()
	ctx.moveTo(prevX, prevY)
	ctx.lineTo(x, y)
	ctx.stroke()

	prevX = x
	prevY = y
}

window.addEventListener('resize', resize)
draw()
