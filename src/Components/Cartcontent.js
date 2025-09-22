import { getFromLocalStorage, setItemTolocalStorage} from "../storage/storage.js";
import { showAlert } from "./Alertas.js";
import { deleteItemLocalStorage } from "../storage/storage.js";

export function Cartcontent() {
    let offcanvasbody = document.querySelector('.offcanvas-body');
    let template = '';
    let dataStorage = getFromLocalStorage();

    if (!dataStorage || dataStorage.length === 0) { // si el carrito está vacío borra la ultima card y renderiza con un mensaje. Bootstrap me deja pegada la ultima card del array del LS
        offcanvasbody.innerHTML = `
            <p class="text-center text-light mt-3">
                Debe seleccionar algun producto!!!! 🛒
            </p>
        `;
        return;
    }

    let total = 0

    dataStorage.forEach((item) => {
        let subtotal = item.qtty * item.price;
        total += subtotal;

        template += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Cantidad: ${item.qtty}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <small class="text-body-secondary">Precio: USD $${item.price}</small>
                    <button class="btn-outline-danger border-0" id="deleteItem-${item.id}"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
        </div>
        `;
    });
  
    offcanvasbody.innerHTML = template;

    DeleteprodCart(dataStorage);

    // btn finalizar
    const btnFinalizar = document.querySelector('#btnfinalizarCompra');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            let total = 0;
            dataStorage.forEach(item => {
                total += item.qtty * item.price;
            });

            showAlert(`Compra realizada. Total: USD $${total.toFixed(2)}`, 'success');

            // Vaciar el carrito
            dataStorage.forEach(item => deleteItemLocalStorage(item.id));
            Cartcontent();
        });
    }
    //btn vaciar
    const btnVaciar = document.querySelector('#vaciarCarrito');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            dataStorage.forEach(item => deleteItemLocalStorage(item.id));
            Cartcontent();
            showAlert('Carrito vaciado', 'warning');
        });
    }

function DeleteprodCart(productsStorage) {
    productsStorage.forEach((item) => {
        let btnDelete = document.querySelector(`#deleteItem-${item.id}`);
        btnDelete.addEventListener('click', () => {
           deleteItemLocalStorage(item.id);
           Cartcontent();
           showAlert('Producto eliminado del carrito', 'danger');
            
        });
        
    });
}
}

 

