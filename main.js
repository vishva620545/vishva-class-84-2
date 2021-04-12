<h1>CAR RACING  : <span id="CAR_RACING"></span></h1>,
<h1> GAME STATUS  : <span id="GAME STATUS "></span></h1>
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_array=["racing.jpg"];
random=Math.floor(Math.random()* 4);
console.log(random);
Rover_width=100;
Rover_height=90;

Rover_x=10;
Rover_y=10;

bgimage="https://i.postimg.cc/bv5d35nK/racing.jpg";
console.log("background_image = " + bgimage);


car1_width = 120
car1_height = 70
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 10
car1_y = 10


function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    car1image_tag=new Image();
    car1image_tag.onload=car1.png;
    car1image_tag.src=car1image;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function car1(){
    ctx.drawImage( car1image_tag,car1_x,car1_y,car1_width,car1_height)
}



