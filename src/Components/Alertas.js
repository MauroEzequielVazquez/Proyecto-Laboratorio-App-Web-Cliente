export function showAlert(message, color) { 
// color: "dark" para agregar desde el modal, "danger" para eliminar, "success" cuando se termina la compra de carrito.
  let template = `
  <div class="toast align-items-center text-white bg-${color} border-0 mb-2" 
       role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>`;

  let toastContainer = document.querySelector("#toast-container");
  toastContainer.insertAdjacentHTML("beforeend", template);

  let lastToast = toastContainer.lastElementChild;
  let bootstrapToast = new bootstrap.Toast(lastToast, { delay: 2000 });
  bootstrapToast.show();
}