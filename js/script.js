const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    console.log(color);
    // Checker loop for removing red border (if exists) and adding gray border on clicked one;
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-red-600");
      // ringButtons[j].classList.add("border-gray-300"); [still works wo these extra complications]
    }
    // Adding border color.
    event.target.classList.add("border-red-600");
    // event.target.classList.remove("border-gray-300"); [still works wo these extra complications]

    const productImage = document.getElementById("product-image")
    // productImage.src = "../images/gray.png";
    productImage.src = "../images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);
    // console.log(button);
    const element = sizes[i];
    if (size===element) {
      button.classList.add("border-red-500");
      // console.log("Condition Matched");
    }
    else {
      button.classList.remove("border-red-500");
    }
  
  }
}