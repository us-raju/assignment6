// const { createElement } = require("react");

// Catagoryes api function here
const showCategories = (func) => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => func(data.categories));
};

// tree card api here
const treeCardApi = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayTreeCard(data.plants));
};

// catagories display function here
const displayCateogries = (data) => {
  for (category of data) {
    const categoryContainer = document.getElementById("Category_container");
    categoryContainer.innerHTML += `
    <li data-id="${category.id}" class="liBtn py-2 px-2 mb-2 hover:bg-green-500 hover:rounded-sm hover:text-white cursor-pointer">
    ${category.category_name}</li>`;
  }

  const liBtns = document.querySelectorAll(".liBtn");
  for (const liBtn of liBtns) {
    liBtn.addEventListener("click", (e) => {
      liBtns.forEach((btn) => {
        btn.classList.remove("bg-green-500", "text-white", "rounded-sm");
      });
      liBtn.classList.add("bg-green-500", "text-white", "rounded-sm");
      loadPlantByCategory(e.target.dataset.id);
    });
  }
};

const loadPlantByCategory = (plantId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
    .then((res) => res.json())
    .then((data) => {
      displayTreeCard(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};
showCategories(displayCateogries);

// tree card display function here
const displayTreeCard = (data) => {
  const treeCardContainer = document.getElementById("tree_card_container");
  treeCardContainer.innerHTML = "";
  for (card of data) {
    const div = (treeCardContainer.innerHTML += `
    <div class="py-4 px-4 tree_card bg-white rounded-lg">
                <img class="h-[186px] w-full" src="${card.image}" alt="" />
                <h4 class="text-[14px] text-[#1F2937] font-semibold my-2">
                  ${card.name}
                </h4>
                <p class="text-xs truncate text-[#71717A] mb-2">
                  ${card.description}
                </p>
                <div class="flex justify-between bg-white mb-2">
                  <span
                    class="bg-[#DCFCE7] py-1 px-3 text-[14px] font-medium text-[#15803D] rounded-[20px]"
                    >${card.category}</span
                  >
                  <ins
                    class="text-[14px] font-semibold text-[#1F2937] no-underline"
                    >&#2547;<span class="taka">${card.price}</span></ins
                  >
                </div>
                <button 
                  class="cartBtn cursor-pointer w-full !text-white !bg-[#15803D] !rounded-3xl py-2"
                >
                  Add to Cart
                </button>
              </div>
        `);
  }
  // add to cart function here
  const cartBtns = document.querySelectorAll(".cartBtn");
  const cartContainer = document.querySelector(".cart_container");
  const totalBox = document.querySelector(".total");
  let count = 0;
  let total = 0;
  cartBtns.forEach((cartBtn) => {
    cartBtn.addEventListener("click", (e) => {
      const card = e.target.closest(".tree_card");
      const titleData = card.querySelector("h4").innerText;
      const price = card.querySelector(".taka").innerText;
      const priceNum = parseInt(price);
      const divElm = document.createElement("div");
      divElm.innerHTML = `
           <div class="cart_item flex justify-between items-center bg-[#F0FDF4] py-2 px-3 mb-2">
              <div>
                <h3 class="text-[14px] text-[#1F2937] font-semibold">${titleData}</h3>
                <ins class="text-[16px] text-[#71717A] no-underline">${price}x <span class="count_item">${count}</span></ins>
              </div>
              <div>
                <span class="closeBtn w-[14px] h-[16px] text-[#8C8C8C] cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
              </div>
            </div>
        `;

      cartContainer.insertBefore(divElm, totalBox);

      // total amount set function
      const total_amount = document.getElementById("total_amount");
      total = total + priceNum;
      total_amount.innerText = total;

      // close Button function
      const closeBtns = document.querySelectorAll(".closeBtn");
      for (const closeBtn of closeBtns) {
        const parentDiv = closeBtn.parentElement;
        const grandParent = parentDiv.parentElement;
        closeBtn.addEventListener("click", () => {
          total = total - priceNum;
          grandParent.classList.add("hidden");
        });
      }
    });
  });
};
treeCardApi();
