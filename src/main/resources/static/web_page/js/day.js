/**
 * 
 */


const helloButton = document.querySelector("#helloButton");
const colors = [
	"초록", 
	"파랑", 
	"노랑"
];


function sayHello() {
alert("stop");
}
sayHello();

helloButton.addEventListener("click",sayHello); 
console.log(colors[0]); // 초록
// 예제12
// 1. 컬러 배열 const colors = [""];
// 2. HTML tag button 
const page1=document.querySelector("#page1"); 
const page2=document.querySelector("#page2"); 
const page3=document.querySelector("#page3"); 
const task = {
title: "HTML 연습하기",
done: false
};

// 3. button 실행할 함수 
function page1Click() {
	alert("1" + buttonColor[0]);
}
function page2Click() {
	alert("2" + buttonColor[1]);
}
function page3Click() {
	alert("3" + buttonColor[2]);
}

// 4. event 실행할 함수
page1.addEventListener("page1", page1Click);
page2.addEventListener("page2", page2Click);
page3.addEventListener("page3", page3Click);

// to_list
const list = 
document.querySelector("#list")
list.addEventListener(
	"list", function listDo () {
		alert("list")
		
	}
);
/*
function listDo () {
	alert("list")
	
}
*/

const input=document.querySelector("#taskInput");
// alert("list"+ input.value);

const item=document.activeElement("li");


item.textContent = input.value;

const taskList=doument.querySelector("#");
taskList.append(item);



/*

function () {
alert("stop");
}); 
*/