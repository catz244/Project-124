function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(600, 160);

    video = createCapture(VIDEO);
    video.size(400, 360);
    video.position(50, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ff66cc');
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}