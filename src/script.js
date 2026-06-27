import {genParticipantID,post} from './config/route.js';

const holeCount = 4
const arrowUnit = 100/holeCount

const arrow = document.getElementById("arrow");

const animationBank = {};
animationBank['empty']=[37,37];
animationBank['arise']=[0,7];
animationBank['full']=[7,7];
animationBank['hit']=[8,17];
animationBank['startleLeft']=[18,27];
animationBank['startleRight']=[28,37];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var currentSelection = 0
function setSelection(selection) {
  if (selection>=0 && selection<holeCount){
    document.getElementsByClassName("select")[currentSelection].style.visibility="hidden";

    currentSelection = selection;
    arrow.style.marginLeft = (arrowUnit*-(holeCount-1-currentSelection*2))+"%";
    document.getElementsByClassName("select")[currentSelection].style.visibility="visible";
    //document.getElementById("counter").innerHTML=currentSelection+1;
  }
}

for (let i = 0;i<holeCount;i++) {
  document.getElementById("holes").innerHTML+=`
          <div id="hole"+(i+1)+">
            <iframe class="hammer" scrolling="no" src="hammer.html"></iframe>
            <div class="animation_container">
              <canvas class="canvas"></canvas>
              <div class="dom_overlay_container"></div>
            </div>
            <img class="select" src="media/select.svg" />
          </div>
          `;
}

setSelection(0);

var previousAlpha;
function selectionDetect(alpha){
  if (previousAlpha!=null){
      if (Math.round(alpha)>(Math.round(previousAlpha)+180)){
        setSelection(currentSelection+1);
      } else if (Math.round(alpha)<(Math.round(previousAlpha)-180)){
        setSelection(currentSelection-1);
      }
  }
  previousAlpha=Math.round(alpha);
}

function handleOrientation(event) {

  let alpha = event.alpha;

  selectionDetect(alpha)

  document.getElementById("rotation-label").innerHTML = alpha + " degrees!";
  document.getElementById("dial-shadow").style.rotate = alpha + "deg";
  document.getElementById("hole-div").style.rotate = alpha + "deg";
  document.getElementById("counter").style.rotate = alpha + "deg";
  document.getElementById("dialogue-main").style.rotate = alpha + "deg";
  document.getElementById("survey-screen").style.rotate = alpha + "deg";
}

var comp = init();
visReset()

function visReset() {
  for (var i = 0;i<holeCount;i++){
    playToAndFrom({},comp,i,animationBank.empty);
  }
}

var spawned=false;
var randomHole;
var score=0;
function spawn() {
  visReset();
  randomHole = getRandomInt(holeCount-1);
  if (randomHole>=currentSelection){(randomHole+=1)%(holeCount-1)}; //Ensures random selection is NOT currently selected hole
  playToAndFrom({},comp,randomHole,animationBank.arise);
}

async function slam() {
  var finalSelection = currentSelection;
  document.getElementsByClassName("hammer")[finalSelection].style.visibility="visible";
  document.getElementsByClassName("hammer")[finalSelection].contentWindow.location.reload(true);
  await sleep(900);
    if (randomHole==finalSelection){
      score+=1;
      document.getElementById("score-label").innerHTML="Score: "+score;
      playToAndFrom({},comp,randomHole,animationBank.hit);
    } else if (randomHole<finalSelection) {
      playToAndFrom({},comp,randomHole,animationBank.startleRight);
    } else if (randomHole>finalSelection) {
      playToAndFrom({},comp,randomHole,animationBank.startleLeft);
    }
}

const countdownMax = 5
async function game(rounds) {
  for (var i = 0;i<rounds;i++){
    console.log("ROUND!")
    await sleep((getRandomInt(5)+3)*1000);
    spawn();
    console.log("testy TEST TESTY TEST TEST")
    var countdown = countdownMax
    for (var j = 0;j<countdownMax;j++){
      document.getElementById("counter").innerHTML=countdown;
      await sleep(1000);
      console.log(countdown);
      countdown-=1;
    }
    document.getElementById("counter").innerHTML="0";
    slam();
    await sleep(1500);
    document.getElementById("counter").innerHTML="‎";
  }
  console.log("noice");
}

//game(5);

//-----------------------------------Intro screen/transitions

let blankOverlay = document.getElementById("blank-overlay");
let innerOverlay = document.getElementById("inner-overlay");

async function blankFadeIn(){
    let animate = blankOverlay.animate(
    [
      {opacity: 0,visibility:"hidden"},
      {opacity: 1,visibility:"visible"}
    ],
    {
      duration: 700,
      iterations: 1
    }
  )
  await animate.finished;
  animate.commitStyles();
  await sleep(500)
}
async function blankFadeOut(){
    let animate = blankOverlay.animate(
    [
      {opacity: 1,visibility:"visible"},
      {opacity: 0,visibility:"hidden"}
    ],
    {
      duration: 3500,
      iterations: 1
    }
  )
  await animate.finished;
  animate.commitStyles();
  await sleep(500)
}

async function dialogueFadeIn(){
  let animate = innerOverlay.animate(
    [
      {opacity: 0,visibility:"hidden"},
      {opacity: 1,visibility:"visible"}
    ],
    {
      duration: 700,
      iterations: 1
    }
  )
  await animate.finished;
  animate.commitStyles();
  await sleep(500)
}
async function dialogueFadeOut(){
    let animate = innerOverlay.animate(
    [
      {opacity: 1,visibility:"visible"},
      {opacity: 0,visibility:"hidden"}
    ],
    {
      duration: 700,
      iterations: 1
    }
  )
  await animate.finished;
  animate.commitStyles();
  await sleep(500)
}

async function dialogueEditText(input){
  document.getElementById("dialogue-main").getElementsByClassName("dialogue-text").item(0).innerHTML=input;
}
async function dialogueEditImg(input){
  document.getElementById("dialogue-main").getElementsByClassName("dialogue-img").item(0).src=input;
}

//-----------------------------------STUDY CODE

var success=false;
var started=false;

async function run() {
  await dialogueFadeIn();
  document.getElementById("intro-screen").style.display="none";
  document.getElementById("dialogue-main").style.display="flex";
  dialogueEditImg("media/instructions/turny.png");
  dialogueEditText("Turnyturn is a Mobile Human Computer Interaction study project aimed to research the viability of purely bidirectional rotation as an interface for interaction.")
  await dialogueFadeOut();
  await sleep(7000);

  await dialogueFadeIn();
  dialogueEditImg("media/instructions/bonky.png");
  dialogueEditText("This study will involve playing a quick minigame, using such an interaction technique in a whack-a-mole style challenge!")
  await dialogueFadeOut();
  await sleep(5000);

  await dialogueFadeIn();
  dialogueEditText("To play, physically turn your phone bidirectionally to control the on screen dial, there'll be a selection of holes that you can switch between upon one full rotation.")
  dialogueEditImg("media/instructions/turny.png");
  await dialogueFadeOut();
  await sleep(8000);

  await dialogueFadeIn();
  dialogueEditText("A full revolution anti clockwise selects the hole towards the left, and vice versa clockwise.")
  dialogueEditImg("media/instructions/turny.png");
  await dialogueFadeOut();
  await sleep(5000);

  await dialogueFadeIn();
  dialogueEditText("When you're familiarised with the controls, click ready and catch Bonkybonk before time runs out!")
  dialogueEditImg("media/instructions/bonky.png");
  await dialogueFadeOut();
  await sleep(5000);

  await dialogueFadeIn();
  dialogueEditText("Once completed, PLEASE complete the provided survey afterwards as this IS part of the overall study! Thank you!")
  dialogueEditImg("media/instructions/turny.png");
  await dialogueFadeOut();
  await sleep(8000);

  await blankFadeIn();
  document.getElementById("dialogue-overlay").style.visibility="hidden";
  document.getElementById("dialogue-main").style.visibility="hidden";
  await sleep(2000);
  await blankFadeOut();

  await sleep(1500);
  await game(0);
  console.log("game DONE");
  await blankFadeIn();
  document.getElementById("dialogue-main").style.display="none";
  document.getElementById("survey-screen").style.display="flex";
  document.getElementById("dialogue-overlay").style.visibility="visible";
  document.getElementById("dialogue-main").style.visibility="visible";
  await blankFadeOut();
}

async function requestDeviceOrientation() {
  if (started){
    console.log("t")
    return;
  }
  console.log("t")
  started=true;
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    //iOS 13+ devices
    try {
      const permissionState = await DeviceOrientationEvent.requestPermission();
      if (permissionState === "granted") {
        window.addEventListener("deviceorientation", handleOrientation);
        success=true;
      } else {
        alert("Permission was denied");
      }
    } catch (error) {
      alert(error);
    }
  } else if ("DeviceOrientationEvent" in window) {
    //non iOS 13+ devices
    console.log("not iOS");
    window.addEventListener("deviceorientation", handleOrientation);
    success=true;
  } else {
    //not supported
    alert("Not Supported");
  }


  
  started=success;
  if (success){
    run();
  }
}

const permButton = document.querySelector('#permission-button');
permButton.addEventListener('click', (event) => {
  requestDeviceOrientation();
});