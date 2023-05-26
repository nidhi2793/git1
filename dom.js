// // // examine the document object//
// // // console.dir(document);
// // console.log(document.children);
// // console.log(document.title);
// // document.title = "123";
// // console.log(document.forms);
// let headertitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headertitle.textContent);
// console.log(headertitle.innerText);
// // headertitle.textContent = "Hello";
// // headertitle.innerText = "Goodbye";
// // headertitle.innerHTML=<h3>Hello</h3>;
// header.style.borderBottom = "solid 3px black";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "Hello 2";
// var title = document.getElementsByClassName("title");
// let subHead = title[0].textContent;
// console.log(subHead);
// console.log(subHead);

// title[0].style.color = "green";
// title[0].style.fontWeight = "bold";
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor = "green";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }
//
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px black";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector("input[type='submit']");
// submit.value = "Send";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = "hidden";

// let item = document.querySelectorAll("li");
// item[1].style.color = "green";

// let odd = document.querySelectorAll("li:nth-child(odd");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// Traversing dom
//parent node

let items = document.querySelector("#items");
// console.log(items.parentNode);

// items.parentNode.style.backgroundColor = "grey";
// console.log(items.parentNode.parentNode);

console.log(items.parentElement);

items.parentElement.style.backgroundColor = "grey";
console.log(items.parentElement.parentElement);

console.log(items.childNodes);
items.childNodes[1].style.color = "red";

console.log(items.lastElementChild);

console.log(items.children[1]);
items.children[1].style.fontWeight = "bold";
console.log(items.firstChild);
console.log(items.firstElementChild);
items.firstElementChild.style.color = "blue";
items.lastElementChild.textContent = "Bye";

console.log(items.nextSibling);
console.log(items.previousSibling);
console.log(items.previousElementSibling);
items.previousElementSibling.style.color = "green";

var newDiv = document.createElement("div");
newDiv.id = "hello";
newDiv.className = "helloclass";
newDiv.setAttribute("title", "Hello Div");
var newDivText = document.createTextNode("Hello");
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
console.log(container);

container.insertBefore(newDiv, h1);

let itemdiv = document.createElement("div");
let itemDivText = document.createTextNode("Hello");
itemdiv.appendChild(itemDivText);
itemdiv.style.fontWeight = "bold";
console.log(itemdiv);
let item = document.querySelector("li");
console.log(item);
let group = document.querySelector("#items");
group.insertBefore(itemdiv, item);
