workbenches = document.getElementById("workbench-container").children

document.getElementById("workbench").style.marginLeft = (window.innerWidth - 300) + "px"
document.getElementById("workbench").style.width      = "300px"

function setWorkbench(name) {
    var cur = document.getElementById("workbench-" + name)
    if (cur == null) { return }

    workbenches.forEach(element => {
        element.style.display = "none"
    });

    cur.style.display = "block"
}