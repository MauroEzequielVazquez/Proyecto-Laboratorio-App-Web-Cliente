export function getProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // acá obtenés el JSON
    .then(data => {
      //console.log(data); <----- si querés ver qué llega
      return data;       // devolvés los productos al .then() de index.js
    });
}
