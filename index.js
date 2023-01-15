let count = [];
let text = document.getElementById("my_text");
let buttonText = document.createElement("p");
let button = document.getElementById("my_btn");
let complete = document.getElementById("complete");

function myFunction() {
  let demo = document.getElementById("demo");

  let div = document.createElement("div");
  div.classList.add("space");
  div.id = "div";

  let edit = new Image();
  edit.classList.add("pic");
  edit.src = "edit.svg";

  let cancel = new Image();
  cancel.src = "Cancel.svg";
  cancel.classList.add("cancel");

  let li = document.createElement("li");
  li.classList.add("list");
  // It gives elementId a value of "li" with
  // the number of child element
  let elementId = `li${demo.childElementCount}`;
  li.id = elementId;

  let p = document.createElement("p");
  p.textContent = text.value;

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkbox");

  if (count.length === 0) {
    demo.appendChild(li);
    document.getElementById(elementId).appendChild(checkBox);
    document.getElementById(elementId).appendChild(p);
    document.getElementById(elementId).appendChild(div);
    document.getElementById(elementId).appendChild(edit);
    document.getElementById(elementId).appendChild(cancel);
    text.value = " ";
    // create a local storage with the id of the TO-DO item
    // and set it value to the content of the to-do item
    localStorage.setItem(elementId, li.innerHTML);
  }

  if (count.length === 1) {
    count.forEach((element) => {
      let parentElement = document.getElementById(element);
      parentElement.childNodes[1].textContent = text.value;
      // it delete all the value in the input bar
      text.value = " ";
      // it changes the button text to "Add"
      buttonText.innerText = "Add";
      button.replaceChild(buttonText, button.childNodes[0]);
      count.pop();
      localStorage.setItem(element, parentElement.innerHTML);
    });
  }
}

let demo = document.getElementById("demo");
demo.addEventListener("click", (event) => {
  let parentId = event.target.parentElement.id;
  let className = event.target.className;
  // adds an event listener to class with the name of pic
  if (className === "pic") {
    // it pushes the id of the parent to the count array
    count.push(parentId);
    text.value = document.getElementById(`${parentId}`).innerText;
    text.focus();
    // it changes the button text to edit
    buttonText.innerText = "Edit";
    button.replaceChild(buttonText, button.childNodes[0]);
    // if the input field is focused on and the enter key is pressed
    // it execute the specified function
    if (text.key === "Enter") {
      myFunction();
    }
  }

  if (className === "cancel") {
    // it removes the TO-DO item from the local storage
    localStorage.removeItem(parentId);
    // it also remove the specified TO-DO item
    document.getElementById(parentId).remove();
  }

  if (className === "checkbox") {
    // it removes the TO-DO item
    localStorage.removeItem(parentId);
    let parentElement = document.getElementById(parentId);
    // It adds the item to the Completed TO-DO list
    complete.appendChild(parentElement);
    document.querySelector(".pic").style.display = "none";
    document.querySelector(".cancel").style.display = "none";
  }
});

function keypress(event) {
  if (event.key === "Enter") {
    // it prevent the default operation from happening when the enter key is pressed
    event.preventDefault();
    // it will automatically click the button
    // so it will call the function that executes when the button is clicked on
    button.click();
  }
}

window.onload = () => {
  // if the localstorage is not empty  when the page is reloaded
  if (localStorage !== undefined) {
    // it iterate over the local storage to re-populate the TO-Do list
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let li = document.createElement("li");
      li.classList.add("list");
      li.id = key;
      li.innerHTML = value;
      document.getElementById("demo").appendChild(li);
    }
  }
};
