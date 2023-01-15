TO-DO LIST
I

### HTML STRUCTURE

- h1
- div.input-group#input-group
- input.inp
- button#my_btn
- ul#demo
- ul#complete#complete

## myFunction

- this function is responsible for creating/editing a TO-DO item
- It's also used for editing the uncomplete TO-DO item

## keyPress

- It's used to click the ADD/EDIT button when the enter key is pressed

window.onload = () => {
// if the localstorage is not empty when the page is reloaded
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

- When the page is loaded it checks to see if the local storage is empty
- if its not empty it will populate the TO-DO list
- else it will do nothing
