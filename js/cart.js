const addToCartButtons = document.querySelectorAll(".v-c-bold");
const counter = document.querySelector("span");
// console.log(addToCartButtons)
let allCartItems = [];

//TODO: Here we make the add to cart buttons such that when you add to cart; the background changes to red and the txt changes to "Remove From Cart"
// FIXME: First I looped througn the arr to find all the buttons using forEach
addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // accessing the element name
    const name =
      e.target.parentElement.previousElementSibling.firstElementChild
        .textContent;

    // Accessing the price
    const price =
      e.target.parentElement.previousElementSibling.lastElementChild
        .textContent;

    const image =
      e.target.parentElement.parentElement.firstElementChild.firstElementChild
        .src;

    // First part I turn the text to lowercase then if it meets the condition , the txt changes to "Remove from cart" and the bcg-clor changes to red
    if (btn.textContent.toLowerCase() === "add to cart") {
      btn.textContent = "Remove From Cart";
      btn.style.backgroundColor = "red";

      allCartItems.push({ itemName: name, itemPrice: price, itemImage: image });
      console.log(allCartItems);
      counter.textContent=allCartItems.length
      // Here incase you tap again it changes back to black and the txt changes to "Add to Cart"
    } else {
      btn.textContent = "Add to Cart";
      btn.style.backgroundColor = "black";
    
    const indexToRemove = allCartItems.findIndex((item) => item.itemName===name)
      if (indexToRemove !== -1) {
        allCartItems.splice(indexToRemove, 1);
        counter.textContent=allCartItems.length
      }
    }
    });
  });
;
