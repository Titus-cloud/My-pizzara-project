const addToCartButtons = document.querySelectorAll(".v-c-bold");
const counter = document.querySelector("span");
const cartContainer = document.querySelector(".cart_container");
const cartHeader = document.querySelector(".cart_hearder");
const cartItemSection = document.querySelector(".cart_items_section");
const cartIcon = document.querySelector(".cart");
// const cartItemDetails = document.querySelector(".cartAll")
// console.log(addToCartButtons)
let allCartItems = [];

cartIcon.addEventListener("click", (e) => {
  // console.log(cartContainer)
  cartContainer.classList.toggle("show-cart-container");
  if (allCartItems.length === 0) {
    cartHeader.style.display = "none";
    cartItemSection.innerHTML = `<h3>No Item Added To Cart Yet</h3>`;
  } else {
    cartHeader.style.display = "flex";
    updateCartItems()
  }
});

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

      // updating the cart when adding item
      allCartItems.push({ itemName: name, itemPrice: price, itemImage: image });
      console.log(allCartItems);
      counter.textContent = allCartItems.length;
      // Here incase you tap again it changes back to black and the txt changes to "Add to Cart"
    } else {
      btn.textContent = "Add to Cart";
      btn.style.backgroundColor = "black";

      // Apdating the cart when removing item
      const indexToRemove = allCartItems.findIndex(
        (item) => item.itemName === name
      );
      if (indexToRemove !== -1) {
        allCartItems.splice(indexToRemove, 1);
        counter.textContent = allCartItems.length;
      }
    }
  });
});

function updateCartItems(){
  // clear first
  cartItemSection.innerHTML = ""
  allCartItems.map((cartItem) => {
    let cartAll=document.createElement("div")
    cartAll.classList.add('cart_items')
    cartAll.innerHTML =`
     <div class="cartImg">
            <img
              src="images/tandoori-chicken.png"
              alt="Tandoori Chicken Pizza"
            />
          </div>
          <p style="flex:1">${cartItem.itemName}<br /></p>
          <p style="flex:1"">Ksh. 1500</p>
          <div class="quants" style="flex:1">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
    `
    cartItemSection.append(cartAll)
  })
}
