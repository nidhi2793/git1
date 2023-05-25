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
let items = document.getElementsByClassName("list-group-item");
console.log(items);
items[2].style.backgroundColor = "green";
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
