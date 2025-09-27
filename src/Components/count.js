export function contador(id) {
  let template = `
    <div class="d-flex align-items-center gap-2" style="height: 40px;">
      <button id="decrementarBtn-${id}" class="btn btn-dark btn-sm">-</button>
      <span id="Contador-${id}" class="px-2">1</span>
      <button id="incrementarBtn-${id}" class="btn btn-dark btn-sm">+</button>
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
