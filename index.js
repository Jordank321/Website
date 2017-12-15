var c;
var x;
var time = 0;
var frame = 0;
var size = 10;
var hZoom;
var vZoom;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
function R(r, g, b, a) {
    a = a === undefined ? 1 : a;
    return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
}
;
window.onload = function () {
    c = document.getElementById("myCanvas");
    x = c.getContext("2d");
    loop();
};
function loop() {
    requestAnimationFrame(loop);
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    hZoom = c.width / 1920;
    vZoom = c.height / 2160;
    frame++;
    time = frame / 60;
    spiral(time);
}
function spiral(t) {
    for (var i = 0; i < 1000; i++) {
        var xpos = (c.width / 2) + (hZoom * i * S(t * i / 101));
        var ypos = (c.height / 2) + (vZoom * i * C(t * i / 100));
        x.fillRect(xpos, ypos, size, size);
        x.fillStyle = R(255 * S(i), 255 * C(i), 255 * (S(i) * C(i)), 1);
    }
}
