export function Modal(prod) {
  const container = document.querySelector("#prodModal");

  container.innerHTML = `
    <div class="modal-dialog">
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

            <div class="col-md-6">
              <p>${prod.description}</p>
            </div>

            <div class="col-12 d-flex justify-content-end align-items-start">
              <p class="justify-content-end align-items-start">
                Price: USD ${prod.price}
              </p>
            </div>

            Aquí va el contenido dinámico que pongamos en el modal...
          </div>
        </div>

        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            data-bs-dismiss="modal">
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">
            Agregar al Carrito
          </button>
        </div>

      </div>
    </div>
  `;
  const modalElement = document.getElementById("prodModal");
  const bootstrapModal = new bootstrap.Modal(modalElement);
  bootstrapModal.show();
}

