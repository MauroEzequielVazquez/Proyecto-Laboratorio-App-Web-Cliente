<<<<<<< HEAD
import { getFromLocalStorage, saveToLocalStorage, setItemTolocalStorage } from "../storage/storage.js"; 
=======
import { getFromLocalStorage, saveToLocalStorage, setItemTolocalStorage } from "./storage/storage.js"; 
>>>>>>> 956ab6e495737521dd31f0e8e9272a262b46cdea
import { contador } from "./count.js"; 
import { addEventListeners } from "./count.js"; 


export function Modal(prod) {
  const container = document.querySelector("#prodModal");

  container.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="prodModalLabel">
            ${prod.title} Modal title
          </h1>
          <button 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close">
          </button>
        </div>

        <div class="modal-body">
          <div class="row">
            
            <div class="col-md-6">
              <img 
                src="${prod.image}" 
                class="img-fluid" alt="${prod.title}" 
                style="height: 300px; width: 259px; object-fit: contain;">
            </div>

            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="d-flex flex-column gap-3"> 
                <p>${prod.description}</p>
                <p style = "width: 150px;"> Price: USD $${prod.price}</p> 
              </div>
            </div>

            ${contador(prod.id)} 
            
        </div>
        

        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            data-bs-dismiss="modal">
            Cerrar
          </button>
          <button 
            type="button" 
            class="btn btn-primary" 
            id="addToCartBtn-${prod.id}" 
            data-id="${prod.id}"> 
            Agregar al Carrito
          </button>
        </div>

      </div>
    </div>
  `;

  const bootstrapModal = new bootstrap.Modal(container); 
  bootstrapModal.show(); 
  addEventListeners(prod.id, 1); 
  const btnAddToCart = document.querySelector(`#addToCartBtn-${prod.id}`); 
  btnAddToCart.addEventListener("click", () => { 
    prod.qqty = ++document.querySelector(`#Contador-${prod.id}`).textContent; 

    // valido si existe en el localStorage, mediante el metodo creado en Storage.js 

    let dataStorage = getFromLocalStorage(); 
    let filtered = dataStorage.filter(p => p.id !== prod.id); 
    filtered.push(prod); 
    setItemTolocalStorage(filtered); 
    // saveToLocalStorage(prod); 
  }) 
}


<<<<<<< HEAD
=======

>>>>>>> 956ab6e495737521dd31f0e8e9272a262b46cdea
