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

let item = document.querySelectorAll("li");
item[1].style.color = "green";

let odd = document.querySelectorAll("li:nth-child(odd");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
