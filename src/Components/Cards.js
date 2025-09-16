import { getProducts } from "../api.js"

export function RenderCards(){
let productList = document.querySelector("#product-list");
console.log(productList);
getProducts().then((products) => {
  let tempalte = "";
  products.forEach((p) => {
    tempalte += `
      <div class="col">
        <div class="card">
          <img src="${p.image}" class="card-img-top" alt="${p.title}">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
          </div>
        </div>
      </div>
    `;
  });

  productList.innerHTML = tempalte;
});

}