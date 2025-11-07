let colorInput = document.getElementById("colorInput");
let applyBtn = document.getElementById("applyBtn");
let colorCode = document.getElementById("colorCode");

applyBtn.addEventListener("click", function() {
  let selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;
  colorCode.textContent = selectedColor;
});
