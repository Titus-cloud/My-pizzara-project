const selectTags = document.querySelectorAll(".select"); //This will give us a nodeList[] thus we can use forrrEach to it
const pizzaItems = document.querySelectorAll(".variaties");

const navEl = document.querySelector('.nav-center')
const hambergeeEl = document.querySelector('.hammburger')

hambergeeEl.addEventListener('click', ()=>{
  navEl.classList.toggle('nav-center')
  // console.log("object");
  hambergeeEl.classList.toggle('ham-open')
})

// we add the class active that I have made on the css, gave it styles and add it using js
selectTags.forEach((tab) => {
  if (tab.textContent.toLowerCase() === "chicken pizza") {
    tab.classList.add("active");
  }
});

pizzaItems.forEach((category) => {
  // console.log(category)
  // if it meets this need let it be visible
  if (category.classList.contains("chicken")) {
    category.style.display = "flex";
    // if they dont follow let them be hidden
  } else {
    category.style.display = "none";
  }
});

// to assign the class active to every;
selectTags.forEach((tab) => {
  // we first remove
  tab.addEventListener("click", (e) => {
    selectTags.forEach((btn) => {
      btn.classList.remove("active");
    });
    // then we add to anywhere
    tab.classList.add("active");
    
    const tabContent = tab.textContent.toLowerCase();
    if (tabContent === "chicken pizza")
      pizzaItems.forEach((category) => {
        // if it meets this need let it be visible
        if (category.classList.contains("chicken")) {
          category.style.display = "flex";
          // if they dont follow let them be hidden
        } else {
          category.style.display = "none";
        }
      }
    
    );
      else if(tabContent === "pepperoni"){
        pizzaItems.forEach((category)=>{
          if(category.classList.contains("pepperoni")){
            category.style.display = "flex"
          }else{
            category.style.display = "none"
          }
        })
      }

       else if(tabContent === "margherita"){
        pizzaItems.forEach((category)=>{
          if(category.classList.contains("margherita")){
            category.style.display = "flex"
          }else{
            category.style.display = "none"
          }
        })
      }

      else if(tabContent === "hawaiian"){
        pizzaItems.forEach((category)=>{
          if(category.classList.contains("hawaiian")){
            category.style.display = "flex"
          }else{
            category.style.display = "none"
          }
        })
      }

      else if(tabContent === "meat lover’s pizza"){
        pizzaItems.forEach((category)=>{
          if(category.classList.contains("meat")){
            category.style.display = "flex"
          }else{
            category.style.display = "none"
          }
        })
      }

  });
});
