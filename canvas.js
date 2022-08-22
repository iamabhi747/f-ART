// setting up canvas

var canvas = document.createElement("CANVAS")
canvas.style.height = window.innerHeight         + "px"
canvas.style.width  = (window.innerWidth - 300)  + "px"

document.body.style.margin   = "0"
document.body.style.overflow = "hidden"

document.body.append(canvas)

var ctx = canvas.getContext("2d")


// background

ctx.fillStyle = "#000"
ctx.rect(0, 0, canvas.width, canvas.height)
ctx.fill()


// whiteboard setup

var isDown = false;
var X,Y;
var pathlib = [] // all prv completed path librery
var path    = [] // current path

var linewidth   = 1
var strokeStyle = "#fff"

var bound_rect = canvas.getBoundingClientRect()

var width_ratio  = canvas.width  / bound_rect.width
var height_ratio = canvas.height / bound_rect.height



// mouse magic

$(canvas).mousedown(
    function(e) {

        // start drawing 

        isDown = true
        ctx.beginPath()

        X = e.clientX * width_ratio
		Y = e.clientY * height_ratio
		ctx.moveTo(X, Y);

        path = [[X,Y]]

    }
)

$(canvas).mousemove(
    function(e) {

        if (isDown) {

            // draw

            X = e.clientX * width_ratio
		    Y = e.clientY * height_ratio

            ctx.linewidth   = linewidth + "px"
            ctx.lineTo(X, Y)
            ctx.strokeStyle = strokeStyle
			ctx.stroke();

            path.push([X, Y])

        }
    }
)

$(canvas).mouseup(
    function(e) {

        // stop drawing

        isDown = false
        ctx.closePath();
        pathlib.push(path)
        console.log(path)

    }
)