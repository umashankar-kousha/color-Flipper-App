//colors array
var coloursArr = [
  "#6C2F75",
  "#90F1EF",
  "#BCE784",
  "#EAA750",
  "#E0D3DE",
  "#F96597",
  "#5B507A",
  "#CFE6F4",
  "#EAA64F",
  "#337CA0",
  "#5B6C5D",
];
//for indexing array
var count = 0;

// elements declaration
let buttonEl = document.getElementById("button");
let cardEl = document.getElementById("card");
let colorEl = document.getElementById("color");
let iconEl = document.getElementById("icon");

// initial style
cardEl.style.backgroundColor = coloursArr[count];
colorEl.textContent = coloursArr[count];

// color change functionality
buttonEl.addEventListener("click", function () {
  count += 1;
  if (count > coloursArr.length - 1) {
    count = 0;
  }

  let color = coloursArr[count];
  cardEl.style.backgroundColor = color;
  colorEl.textContent = coloursArr[count];
});

// copy to clip board functionality
iconEl.addEventListener("click", () => {
  navigator.clipboard.writeText(coloursArr[count]);
  alert(`HexCode copied ${coloursArr[count]}`);
});
