const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close";
    span.onclick = function () {
      this.parentElement.remove();
    };

    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagname === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHtML);
}
function showtask() {
  listContainer.innerHtML = localStorage.getItem("data");
}
showtask();
