let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (event.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += event.target.innerHTML;
      input.value = string;
    }
  });
});
