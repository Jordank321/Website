var c: HTMLCanvasElement;
var x: CanvasRenderingContext2D;
var time: number = 0;
var frame: number = 0;
var size: number = 10;
var hZoom: number;
var vZoom: number;
var S: Function = Math.sin;
var C: Function = Math.cos;
var T: Function = Math.tan;

function R(r: number,g: number,b: number,a: number) {
    a = a === undefined ? 1 : a;
    return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
};

window.onload = () => {
    
    c = <HTMLCanvasElement>document.getElementById("myCanvas");
    x = c.getContext("2d");
    loop()

}

function loop(){
    requestAnimationFrame(loop);
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    hZoom = c.width/1920;
    vZoom = c.height/2160;
    frame++;
    time = frame/60;
    spiral(time);
}

function spiral(t: number){
    for(var i=0;i<1000;i++){
        var xpos = (c.width/2)+(hZoom*i*S(t*i/101));
        var ypos = (c.height/2)+(vZoom*i*C(t*i/100));
        x.fillRect(xpos,ypos,size,size);x.fillStyle=R(255*S(i),255*C(i),255*(S(i)*C(i)),1)
    }
}