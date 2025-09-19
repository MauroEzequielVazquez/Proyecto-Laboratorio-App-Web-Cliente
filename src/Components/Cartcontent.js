import { getFromLocalStorage } from "../storage/storage.js";

export function Cartcontent() {
    let offcanvasbody = document.querySelector(".offcanvas-body");
    let dataStorage = getFromLocalStorage() || [];
    let template = ``;

    if (dataStorage.length === 0) {
        offcanvasbody.innerHTML = `<p class="text-center text-white">El carrito está vacío</p>`;
        return;
    }

    dataStorage.forEach((prod) => {
        template += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="${prod.image}" class="img-fluid rounded-start" style="object-fit: contain; height: 150px; width: 100px;" alt="${prod.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">${prod.title}</h5>
                            <p class="card-text">Cantidad: ${prod.qtty}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-body-secondary">Precio Unitario: $${prod.price}</small>
                            <button class="btn btn-outline-danger" border-0 id="deleteItem-${prod.id}">
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    offcanvasbody.innerHTML = template;
}
