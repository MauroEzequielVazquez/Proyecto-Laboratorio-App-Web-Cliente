import { getProducts } from "../services/api.js";
import { Modal } from "./Modal.js"; 

export function RenderCards(products) { 

  let productList = document.querySelector("#product-list"); 
  let template = ""; 

    products.forEach((p) => { 
      template += ` 
        <div class="col-auto"> 
          <div class="card justify-content-center align-items-center" style="width: 300px;"> 
            <img src="${p.image}" class="card-img-top" alt="${p.title}" style="height: 300px; width: 259px; object-fit: contain;"> 
            <div class="card-body" style="width: 300px; overflow: hidden;"> 
              <h5 class="card-title text-truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"> 
              ${p.title} 
              </h5> 
            </div> 
            <div class="mb-3"> 
              <button class="btn btn-dark" id="btn-${p.id}">Más detalles</button> 
            </div> 
          </div> 
        </div> 
        `; 
    }); 

    productList.innerHTML = template; 

    products.forEach((p) => { 
      let button = document.querySelector(`#btn-${p.id}`); 

      if (button) { 
        button.addEventListener('click', () => { 
        // console.log(`Botón de producto ${p.id} clickeado`); 
        Modal(p); 
        }); 
      } 

    }); 
  }
  

