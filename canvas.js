// setting up canvas

var canvas = document.createElement("CANVAS")
canvas.height = window.innerHeight 
canvas.width  = (window.innerWidth - 300)

document.body.style.margin   = "0"
document.body.style.overflow = "hidden"

document.body.prepend(canvas)

var ctx = canvas.getContext("2d")


// background

ctx.fillStyle = "#000"
ctx.rect(0, 0, canvas.width, canvas.height)
ctx.fill()