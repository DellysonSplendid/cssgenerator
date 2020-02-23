// console.log(alphaNumerics.shuffle())
let output = document.querySelector(".output");
let range = document.querySelector("#range");
let transform = document.querySelector(".transform");
document.addEventListener("click", function(e) {
  if (!e.target.matches("#shuffleBtn")) return false;
  randomColor(6, "abcd01234efgh56789");
});
function randomColor(length, chars) {
  let color = document.querySelector(".color");
  let output = document.querySelector(".output");
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  color.textContent = `color: #${result}`;
  output.style.backgroundColor = `#${result}`;
  output.textContent = `#${result}`;
}

// set the initial value of range to zero

range.value = 0;

function generateBorderRadius() {
  let output = document.querySelector(".output");
  let borderRadius = document.querySelector(".border-radius");
  output.style.borderRadius = `${range.value}%`;
  output.textContent = `${range.value}%`;
  borderRadius.textContent = ` border-radius: ${range.value}%`;
}

function generateBoxShadow() {
  var boxShadowFirst = document.querySelector(".box-shadow-first").value;
  var boxShadowSecond = document.querySelector(".box-shadow-second").value;
  var boxShadowColor = document.querySelector(".box-shadow-color").value;
  let blur = document.getElementById("blur").value;
  let spread = document.getElementById("spread").value;

  if (
    boxShadowFirst === "" ||
    boxShadowSecond === "" ||
    boxShadowColor === "" ||
    boxShadowColor.length < 0 ||
    boxShadowColor.length > 6
  ) {
    alert("All inputs are required!");
    return false;
  }
  var boxShadow = document.querySelector(".box-shadow");
  output.textContent = `Box Shadow: ${boxShadowFirst}px ${boxShadowSecond}px  ${blur}px ${spread}px`;
  boxShadow.textContent = `box-shadow: ${boxShadowFirst}px ${boxShadowSecond}px  ${blur}px ${spread}px #${boxShadowColor}`;
  output.style.boxShadow = `
    ${boxShadowFirst}px 
    ${boxShadowSecond}px
    ${blur}px
     ${spread}px
    #${boxShadowColor}
    `;
}
function generateBorder() {
  let borderStyle = document.getElementById("border-style").value;
  let borderSize = document.getElementById("border-size").value;
  let borderColor = document.getElementById("border-color").value;
  let border = document.querySelector(".border");
  if (borderSize === "" || borderStyle === "" || borderColor === "") {
    alert("All inputs are required!");
    return false;
  }
  if (borderColor == "" || borderColor.length < 0 || borderColor.length < 6) {
    alert("All inputs are required!");
  }
  console.log(borderStyle, borderSize, borderColor);
  output.style.border = `${borderStyle} ${borderSize}px #${borderColor}`;
  border.textContent = ` border: ${borderStyle} ${borderSize}px #${borderColor}%`;
}

function translateX() {
  let translateX = document.getElementById("translate-x").value;
  console.log(translateX);
  output.style.transform = `translateX(${translateX}px)`;
  transform.textContent = ` transform: translateX(${translateX}px)`;
}
function translateY() {
  let translateY = document.getElementById("translate-y").value;
  console.log(translateY);
  output.style.transform = `translateY(${translateY}px)`;
  transform.textContent = ` transform: translateY(${translateY}px)`;
}

function scale() {
  let scale = document.getElementById("scale").value / 10;
  console.log(scale);
  output.style.transform = `scale(${scale})`;
  transform.textContent = ` transform:scale(${scale})`;
}

function rotate() {
  let rotate = document.getElementById("rotate").value;
  output.style.transform = `rotate(${rotate}deg)`;
  transform.textContent = ` transform: rotate(${rotate}deg)`;
}

document.addEventListener("DOMContentLoaded", function(e) {
  setTimeout(function() {
    document.querySelector(".side-note").style.display = "none";
  }, 10000);
});

document.addEventListener("change", function(e) {
  if (!e.target.matches("#range")) return false;

  generateBorderRadius();
});
document.addEventListener("click", function(e) {
  if (!e.target.matches("#genBorder")) return false;
  generateBorder();
});

document.addEventListener("change", function(e) {
  if (!e.target.matches("#translate-x")) return false;
  translateX();
});
document.addEventListener("change", function(e) {
  if (!e.target.matches("#translate-y")) return false;
  translateY();
});
document.addEventListener("change", function(e) {
  if (!e.target.matches("#scale")) return false;
  scale();
});
document.addEventListener("change", function(e) {
  if (!e.target.matches("#rotate")) return false;
  rotate();
});
document.addEventListener("click", function(e) {
  if (!e.target.matches("#genShad")) return false;
  generateBoxShadow();
});
