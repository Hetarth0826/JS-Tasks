let children = document.querySelector("ul").children;
let i = 0;

children[i].classList.add("selected"); // Item default selection

function resetClass() {
  for (let j = 0; j < children.length; j++) {
    children[j].classList.remove("selected");
  }
}

function next() {
  if (i >= children.length - 1) {
    return false;
  }
  resetClass();
  i++;
  children[i].classList.add("selected");
}

function previous() {
  if (i <= 0) {
    return false;
  }
  resetClass();
  i--;
  children[i].classList.add("selected");
}
