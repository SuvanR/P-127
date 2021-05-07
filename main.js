httd_music1 = " ";
httd_music2 = " ";

function preload(){
    httd_music1 = "where_no_one_goes.mp3";
    httd_music2 = "flying_with_mother.mp3";
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);
}