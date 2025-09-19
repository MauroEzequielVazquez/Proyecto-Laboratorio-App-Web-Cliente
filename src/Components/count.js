export function contador(id) {
  let template = `
    <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
      <button id="decrementarBtn-${id}" class="btn btn-dark">-</button>
        <span id="Contador-${id}">1</span>
      <button id="incrementarBtn-${id}" class="btn btn-dark">+</button>
    </div>
  `;
  return template;
}
//eventos para darle vida a los botones 

export function addEventListeners(id,cantidad) {
    let btnIncrement = document.querySelector(`#incrementarBtn-${id}`);
    let btnDecrement = document.querySelector(`#decrementarBtn-${id}`);
    let spanContador = document.querySelector(`#Contador-${id}`);

    function actualizarCarrito() {
        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        cart[id] = cantidad;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    btnIncrement.addEventListener("click", () => {
        spanContador.textContent = ++cantidad;
        actualizarCarrito();
    }); 


    btnDecrement.addEventListener("click", () => {
        if (cantidad > 1) {
            spanContador.textContent = --cantidad;
        }
        spanContador.textContent = cantidad;
        actualizarCarrito();

    });
}
