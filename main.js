status = "";
function setUp(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createcapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object is being detected by COCO SSD";
    status = document.getElementById("text_input1").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    Image(video,0,0,380,380)
}