img=""
status=""
function preload(){
    img=loadImage("dog_cat.jpg")
}
function setup(){
    canvas=createCanvas(600,400)
    canvas.center()
    //Code for initilizing CocoSSD
    objectdetector=ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("Model Loaded")
    status=true
    document.getElementById("status").innerHTML="Status: Detecting Object "
    objectdetector.detect(img,gotResults)
}
function gotResults(error,results){
if (error) {
    console.log(error)

}
else{
    console.log(results)
}
}

function draw(){
image(img,0,0,600,400)
//Code for drawing rectangle around the dog
fill("red")
//text("hello",x,y)
text("Dog",80,65)
textSize(15)
stroke("red")
noFill()
//rect(x,y,width,height)
rect(80,80,320,300)
//Code for drawing rectangle around the cat
fill("red")
text("Cat",320,100)
stroke("red")
noFill()
rect(300,105,250,250)
}