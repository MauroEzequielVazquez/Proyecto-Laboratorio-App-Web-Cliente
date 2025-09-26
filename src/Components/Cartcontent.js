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
               Carrito vacío, por favor seleccione un producto!!!! 🛒
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
                        <p class="card-text fw-bold">Subtotal: USD $${(subtotal).toFixed(2)}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <small class="text-body-secondary">Precio: USD $${item.price}</small>
                    <button class="btn-outline-danger border-0" id="deleteItem-${item.id}"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
        </div>
        `;
    });
    // Agrego el total al final del template
    template += `
    <div class="text-end mt-3">
        <h5 class="fw-bold">Total: USD $${total.toFixed(2)}</h5>
    </div>
`;

    offcanvasbody.innerHTML = template;

    DeleteprodCart(dataStorage);

    // btn finalizar
const btnFinalizar = document.querySelector('#btnfinalizarCompra');
if (btnFinalizar && btnFinalizar.parentNode) {
    const newBtnFinalizar = btnFinalizar.cloneNode(true);
    btnFinalizar.parentNode.replaceChild(newBtnFinalizar, btnFinalizar);
    newBtnFinalizar.addEventListener('click', () => {
        let totalCompra = 0;
        dataStorage.forEach(item => {
            totalCompra += item.qtty * item.price;
        });

        showAlert(`Compra realizada. Total: USD $${totalCompra.toFixed(2)}`, 'success');

        // Vaciar el carrito de una sola vez
        localStorage.setItem("cart", JSON.stringify([]));
        Cartcontent();
    });
}

//vaciar carrito
const btnVaciar = document.querySelector('#vaciarCarrito');
if (btnVaciar && btnVaciar.parentNode) {
    const newBtnVaciar = btnVaciar.cloneNode(true);
    btnVaciar.parentNode.replaceChild(newBtnVaciar, btnVaciar);
    newBtnVaciar.addEventListener('click', () => {
        localStorage.setItem("cart", JSON.stringify([])); // limpio todo de una
        Cartcontent();
        showAlert('Carrito vaciado', 'warning');
    });
}

function DeleteprodCart(productsStorage) {
    productsStorage.forEach((item) => {
        let btnDelete = document.querySelector(`#deleteItem-${item.id}`); 
        if (btnDelete && btnDelete.parentNode) {
            // reemplazo para asegurar que no haya listeners antiguos
            const newBtnDelete = btnDelete.cloneNode(true);
            btnDelete.parentNode.replaceChild(newBtnDelete, btnDelete);
            newBtnDelete.addEventListener('click', () => {
                deleteItemLocalStorage(item.id);
                Cartcontent();
                showAlert('Producto eliminado del carrito', 'danger');
            });
        }
    });
}

}

 

