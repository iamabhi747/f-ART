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

var linewidth   = 5
var strokeStyle = "#fff"


// mouse magic

$(canvas).mousedown(
    function(e) {

        // start drawing 

        isDown = true
        ctx.beginPath()

        X = e.pageX //- canvas.offsetLeft;
		Y = e.pageY //- canvas.offsetTop;
		ctx.moveTo(X, Y);

        path = [[X,Y]]

    }
)

$(canvas).mousemove(
    function(e) {

        if (isDown) {

            // draw

            X = e.pageX //- canvas.offsetLeft;
		    Y = e.pageY //- canvas.offsetTop;

            ctx.linewidth   = linewidth
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