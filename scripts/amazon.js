
let productsHTML = '';

products.forEach((product) => {
 productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents )}
          </div>


          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

         
        </div>
        `;
});



document.querySelector('.js-product-grid').innerHTML = productsHTML;

// Search functionality
function renderProducts(productList) {
  const grid = document.querySelector('.js-product-grid');
  grid.innerHTML = '';
  productList.forEach(product => {
    grid.innerHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>
        <div class="product-name limit-text-to-2-lines">${product.name}</div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>
        <div class="product-price">${(product.priceCents )}</div>
        <div class="product-spacer"></div>
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">Added
        </div>
      </div>
    `;
  });
}

// Initial render
if (typeof products !== 'undefined') {
  renderProducts(products);
}

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

if (searchButton && searchBar) {
  searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });

  searchBar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchButton.click();
    }
  });
}
document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
 button.addEventListener('click', () => {
const productName = button.dataset.productName;
cart.push({
  productName: productName,
  quantity: 1
});

console.log(cart);
});    
});
