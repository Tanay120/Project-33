const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boy;
var snow;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow = new Snow(100,100);
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();   
  snow.display();
}