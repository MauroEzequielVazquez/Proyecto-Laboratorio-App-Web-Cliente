import { saveToLocalStorage, updateItemLocalStorage } from "../storage/storage.js";
import { Cartcontent } from "./Cartcontent.js";
import { contador } from "./count.js";
import { addEventListeners } from "./count.js";
import { showAlert } from "./Alertas.js";

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
                                class="img-fluid" 
                                alt="${prod.title}" 
                                style="height: 300px; width: 259px; object-fit: contain;">
                        </div>

                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <div class="d-flex flex-column gap-3">
                                <p>${prod.description}</p>
                                <p style="width: 150px;">
                                    Price: USD $${prod.price}
                                </p>
                            </div>
                        </div>

                        ${contador(prod.id)}
                    </div>
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
                        class="btn btn-dark" 
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
        let inpcant = document.querySelector(`#Contador-${prod.id}`);
        let qtty = parseInt(inpcant.textContent);
        let idx = updateItemLocalStorage(prod.id, qtty);
        if (idx === -1) {
            prod.qtty = qtty;
            saveToLocalStorage(prod);
        }
        showAlert(`${prod.title} agregado al carrito`, 'dark');
        Cartcontent();

    });
};
