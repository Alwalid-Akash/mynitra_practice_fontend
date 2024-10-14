let itemsContainerElement = document.querySelector(".items-container");

let item = {

  item_image: 'images/1.jpg',
  rating:{
    stars:4.5,
    noOfReviws:1400,
  },
  company_name:'dhaka shop',
  item_name:'ear rings ',
  current_price: 500,
  original_price: 1050,
  discount_prcentage: 42,

}

itemsContainerElement.innerHTML = `
<div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars}⭐| ${item.rating.noOfReviws}
                </div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">${item.current_price}tk</span>
                    <span class="Original-price">${item.original_price}</span>
                    <span class="Discount">${item.discount_prcentage}%</span>
                </div>
                <div>
                    <button class="btn-add-bag"> ADD TO CART</button>
                </div>
            </div>`;
 