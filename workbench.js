workbenches = document.getElementById("workbench-container").children

function setWorkbench(name) {
    var cur = document.getElementById("workbench-" + name)
    if (cur == null) { return }

    workbenches.forEach(element => {
        element.style.display = "none"
    });

    cur.style.display = "block"
}