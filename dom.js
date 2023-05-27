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

// let items = document.querySelector("#items");
// console.log(items.parentNode);

// items.parentNode.style.backgroundColor = "grey";
// console.log(items.parentNode.parentNode);

// console.log(items.parentElement);

// items.parentElement.style.backgroundColor = "grey";
// console.log(items.parentElement.parentElement);

// console.log(items.childNodes);
// items.childNodes[1].style.color = "red";

// console.log(items.lastElementChild);

// console.log(items.children[1]);
// items.children[1].style.fontWeight = "bold";
// console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.style.color = "blue";
// items.lastElementChild.textContent = "Bye";

// console.log(items.nextSibling);
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color = "green";

// var newDiv = document.createElement("div");
// newDiv.id = "hello";
// newDiv.className = "helloclass";
// newDiv.setAttribute("title", "Hello Div");
// var newDivText = document.createTextNode("Hello");
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(container);

// container.insertBefore(newDiv, h1);

// let itemdiv = document.createElement("div");
// let itemDivText = document.createTextNode("Hello");
// itemdiv.appendChild(itemDivText);
// itemdiv.style.fontWeight = "bold";
// console.log(itemdiv);
// let item = document.querySelector("li");
// console.log(item);
// let group = document.querySelector("#items");
// group.insertBefore(itemdiv, item);
// console.log(items.parentElement);

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var description = document.getElementById("description").value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  let span = document.createElement("span");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.innerText = newItem;
  p2.innerText = description;
  span.appendChild(p1);
  span.appendChild(p2);
  li.appendChild(span);

  // let insert = newItem + " " + description;
  // li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
