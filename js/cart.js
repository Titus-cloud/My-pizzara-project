const addToCartButtons = document.querySelectorAll(".v-c-bold");
const counter = document.querySelector("span");
const cartContainer = document.querySelector(".cart_container");
const cartHeader = document.querySelector(".cart_hearder");
const cartItemSection = document.querySelector(".cart_items_section");
const cartIcon = document.querySelector(".cart");
const totalPrice = document.querySelector(".totalP");
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
    updateCartItems();
    updatePrices()
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
      e.target.parentElement.previousElementSibling.lastElementChild.textContent.replace(
        "Ksh. ",
        ""
      );

    const image =
      e.target.parentElement.parentElement.firstElementChild.firstElementChild
        .src;

    // First part I turn the text to lowercase then if it meets the condition , the txt changes to "Remove from cart" and the bcg-clor changes to red
    if (btn.textContent.toLowerCase() === "add to cart") {
      btn.textContent = "Remove From Cart";
      btn.style.backgroundColor = "red";

      // updating the cart when adding item
      allCartItems.push({ itemName: name, itemPrice: price, itemImage: image });
      // console.log(allCartItems);
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

function updateCartItems() {
  // Clear the cart item section first
  cartItemSection.innerHTML = "";

  // Map through all cart items and create DOM elements for each
  allCartItems.map((cartItem, index) => {
    let cartAll = document.createElement("div");
    cartAll.classList.add("cart_items");
    cartAll.innerHTML = `
     <div class="cartImg">
        <img
          src="${cartItem.itemImage}"
          alt="${cartItem.itemName}"
        />
     </div>
     <p style="flex:1">${cartItem.itemName}<br /></p>
     <div class="quants" style="flex:1">
       <p class="decrement">-</p>
       <p class="Quantity">1</p>
       <p class="increment">+</p>
       <p class="price" style="flex:1">Ksh. ${cartItem.itemPrice}</p>
     </div>
     <button class="delete-item" data-index="${index}">Remove</button>
    `;
    cartItemSection.append(cartAll);
  });

  // Attach event listeners to the delete buttons
  attachDeleteListeners();
}

function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-item");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const indexToRemove = e.target.getAttribute("data-index");
      allCartItems.splice(indexToRemove, 1);
      updateCartItems();
      updatePrices();
      counter.textContent = allCartItems.length;

      // Optionally hide the cart header if empty
      if (allCartItems.length === 0) {
        cartHeader.style.display = "none";
        cartItemSection.innerHTML = `<h3>No Item Added To Cart Yet</h3>`;
      }
    });
  });
}


function myne(e) {
  // let value= document.getElementsByClassName("increment").value
  cartItemSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("increment")) {
      e.target.parentElement.children[1].textContent++;
    } else if (e.target.classList.contains("decrement")) {
      let quantityNo = e.target.parentElement.children[1].textContent;
      // console.log(quantityNo);
      if (quantityNo > 1) {
        e.target.parentElement.children[1].textContent--;
      }
    }

    updatePrices();
  });
}

myne();

// Updating the priceList a total for each item

function updatePrices() {
  let total = 0;
  const cartItems = document.querySelectorAll(".cart_items");
  cartItems.forEach((cartItem) => {
    const productName = cartItem.children[1].textContent;
    // console.log(productName);
    const item = allCartItems.find((item) => item.itemName === productName);
    // console.log(allCartItems);
    if (item) {
      const singleItemPrice = parseInt(item.itemPrice);
      const itemQuantity = parseInt(
        cartItem.querySelector(".Quantity").textContent
      );
      const totalForSingleItem = itemQuantity * singleItemPrice;
      cartItem.querySelector(
        ".price"
      ).textContent = `Ksh. ${totalForSingleItem}`;
      // console.log(totalForSingleItem);
      total += totalForSingleItem;
    }
  });
  totalPrice.textContent = `Total Price: Ksh. ${total}`;
}

// totalPrice.innerHTML = `<h3>Total Price: ${total}</h3>`

// updatePrices();
// this.totalPrice = this.cartItems.reduce((acc, item) => {
//   return acc += item.amount;
// }, 0);

