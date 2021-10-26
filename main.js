function preload() {

}

function setup() {
    Canvas = createCanvas(640, 480);
    Canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide
    var color = "";

}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(color);
}

function take_snapshot() {
    save("Birthday_Pic.png");
}

function filter_apply() {
    color = document.getElementById("color_nane").value;
}