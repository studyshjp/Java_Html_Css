/**
 *  
1. score = num 
2. addTenPoints()
3. addTenPoints() *2
 */
//=const score=0;
// let score = 0;
let num = 0;
function addTenPoints() {
	num = num + 10;
	console.log("num"+num);
	
}
addTenPoints();
addTenPoints();

// index2.html id=start
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#end");
const messageElement = document.querySelector("#message");
const nameInput = document.querySelector("#Name");
const Name = nameInput.value;

const greeting = document.querySelector("#greeting");
const message = document.querySelector("#message");
const infobutton = document.querySelector("#infobutton");


const numElement = document.querySelector("#num");
const clickButton = document.querySelector("#clickButton");
const resetButton = document.querySelector("#resetButton");
// const messageElement = document.querySelector("#message");


// start 실행 
function startGo () {
	// message screen 
	alert("시작");
}
//end 
function end() {
	alert("끝");
}

function info() {
	message.textContent=greeting.value;
	alert("greeting"+message.textContent);
}

function addnum() {
num = num + 1;
numElement.textContent = num;
messageElement.textContent = "win";
}

function reset() {
num = 0;
numElement.textContent = num;
messageElement.textContent = "reset";
}


// name.addEventListener("name","name")
startButton.addEventListen("click", startGo);
endButton.addEventListen("click", end);
messageElement.textContent = "click";
console.log(Name);
messageElement.classList.add("success");
messageElement.classList.remove("success");
messageElement.classList.toggle("success");

clickButton.addEventListener("click", addnum);
resetButton.addEventListener("click", reset);