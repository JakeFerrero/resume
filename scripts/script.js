function javabar(val) {
    var bar = document.getElementById("java-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
}

function jsbar(val) {
    var elem = document.getElementById("js-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function shellbar(val) {
    var elem = document.getElementById("shell-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function cbar(val) {
    var elem = document.getElementById("c-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function pythonbar(val) {
    var elem = document.getElementById("python-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function gobar(val) {
    var elem = document.getElementById("go-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function linuxbar(val) {
    var elem = document.getElementById("linux-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function macbar(val) {
    var elem = document.getElementById("mac-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function windowsbar(val) {
    var elem = document.getElementById("windows-progress");
    var width = 1;
    var animation = setInterval(frame, 8);
    function frame() {
        if (width >= val * 10) {
            clearInterval(animation);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

window.onload = javabar(10);
window.onload = jsbar(8);
window.onload = shellbar(9);
window.onload = cbar(8);
window.onload = pythonbar(7);
window.onload = gobar(7);
window.onload = linuxbar(10);
window.onload = macbar(10);
window.onload = windowsbar(8);