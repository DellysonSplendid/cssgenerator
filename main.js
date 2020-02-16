// console.log(alphaNumerics.shuffle())
let output = document.querySelector(".output");
let range = document.querySelector("#range");


document.addEventListener("click", function (e) {

    if (!e.target.matches("#shuffleBtn")) return false;
    randomString(6, 'abcd01234efgh56789');
});

function randomString(length, chars) {
    let color = document.querySelector(".color");
    let output = document.querySelector(".output");
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    color.textContent = `color: #${result}`;
    output.style.backgroundColor = `#${result}`;
    output.textContent = `#${result}`
};



document.addEventListener("click", function (e) {
    var boxShadowFirst = document.querySelector(".box-shadow-first").value;
    var boxShadowSecond = document.querySelector(".box-shadow-second").value;
    var boxShadowColor = document.querySelector(".box-shadow-color").value;
    let blur = document.getElementById("blur").value;
    let spread = document.getElementById("spread").value;
    var boxShadow = document.querySelector(".box-shadow");
    if (!e.target.matches("#genShad")) return false;
    if (e.target.value == "GENERATE") {
        e.target.value == "UPDATE";
    } else {
        e.target.value == "GENERATE";
    }
    output.textContent = `Box Shadow: ${boxShadowFirst}px ${boxShadowSecond}px  ${ blur }px ${spread}px`
    boxShadow.textContent = `box-shadow: ${boxShadowFirst}px ${boxShadowSecond}px  ${ blur }px ${spread}px #${boxShadowColor}`
    output.style.boxShadow = `
    ${boxShadowFirst}px 
    ${boxShadowSecond}px
    ${blur }px
     ${ spread }px
    #${boxShadowColor }
    `;
    console.log(`box-shadow: ${boxShadowFirst}px ${boxShadowSecond}px  ${ blur }px ${spread}px`);

});


// set the initial value of range to zero

range.value = 0;;
document.addEventListener("change", function (e) {
    let output = document.querySelector(".output");
    let borderRadius = document.querySelector(".border-radius");
    if (!e.target.matches("#range")) return false;
    output.style.borderRadius = `${range.value}%`;
    output.textContent = `${range.value}%`
    borderRadius.textContent = ` border-radius: ${range.value}%`;
});
document.addEventListener("click", function (e) {
    if (!e.target.matches("#genBorder")) return false;
    let borderStyle = document.getElementById("border-style").value;
    let borderSize = document.getElementById("border-size").value;
    let borderColor = document.getElementById("border-color").value;
    let border = document.querySelector(".border");
    console.log(borderStyle, borderSize, borderColor);
    output.style.border = `${borderStyle} ${borderSize}px #${borderColor}`;
    output.textContent = `${borderStyle} ${borderSize}px #${borderColor}`
    border.textContent = ` border: ${borderStyle} ${borderSize}px #${borderColor}%`;

})