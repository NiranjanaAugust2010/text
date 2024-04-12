noseX=0
noseY=0
difference=0
rightWristX=0
leftWristX=0


function setup(){
   canvas=createCanvas(550,550)
   canvas.position(560,150)
   
   camera=createCapture(VIDEO)
   camera.size(550,500)

   poseNet=ml5.poseNet(camera,modelLoaded)
   poseNet.on('pose',gotPoses)
}

function modelLoaded(){
  console.log("model is loaded")
}

function gotPoses(results){
  if(results.length>0){
   console.log(results)
      noseX=results[0].pose.nose.x 
      noseY=results[0].pose.nose.y 
      console.log("noseX= " + noseX + " noseY= " +noseY)
      leftWristX=results[0].pose.leftWrist.x 
      rightWristX=results[0].pose.rightWrist.x
      difference=floor(leftWristX-rightWristX)
  }
}

function draw(){
   background('#AED6F1')
   document.getElementById("size").innerHTML="width and height of the square is  "+difference+"px"
   fill('#AF7AC5')
   textSize(difference)
   text("Shiny",50,400)
}