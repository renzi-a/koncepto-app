const products = [
  {
    name: "Backpack",
    image: "https://via.placeholder.com/300x200?text=Backpack",
    price: 29.99
  },
  {
    name: "Notebook Set",
    image: "https://via.placeholder.com/300x200?text=Notebook+Set",
    price: 9.99
  },
  {
    name: "Colored Pencils",
    image: "https://via.placeholder.com/300x200?text=Colored+Pencils",
    price: 5.99
  },
  {
    name: "Lunch Box",
    image: "https://via.placeholder.com/300x200?text=Lunch+Box",
    price: 12.5
  },
  {
    name: "Scientific Calculator",
    image: "https://via.placeholder.com/300x200?text=Calculator",
    price: 39.99
  },
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.className = "product";
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button class="btn">Add to Cart</button>
  `;
  container.appendChild(productCard);
});
