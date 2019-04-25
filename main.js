let img;

function preload(){
img = loadImage('https://xzdl43v0mdf2m45tz2aj7kkv35-wpengine.netdna-ssl.com/wp-content/uploads/2010/10/orange-780x400.jpg');
}

function setup(){
createCanvas(500, 800);

}

function draw(){
background(100);
image(img, 0, 0);
}
