function move(val) {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 8);
    function frame() {
        if (width >= val*10) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

window.onload = move(8);
