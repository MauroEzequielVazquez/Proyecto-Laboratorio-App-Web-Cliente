import { RenderCards } from "./Components/Cards.js";
import { Cartcontent } from "./Components/Cartcontent.js";
import { initiLocalStorage } from "./storage/storage.js";
import { getProducts } from "./services/api.js";

initiLocalStorage();


getProducts().then(products => {
    let inputSearch = document.querySelector('#inputSearch');
    let electronicsFilter = document.querySelector('#electronicsFilter');
    electronicsFilter.addEventListener('click', () => {
        let result = products.filter(p => p.category === "electronics");
        return RenderCards(result);
    });
    let jeweleryFilter = document.querySelector('#jeweleryFilter');
    jeweleryFilter.addEventListener('click', () => {
        let result = products.filter(p => p.category === "jewelery");
        return RenderCards(result);
    });
    let mensFilter = document.querySelector('#mensFilter');
    mensFilter.addEventListener('click', () => {
        let result = products.filter(p => p.category === "men's clothing");
        return RenderCards(result);
    });
    let womensFilter = document.querySelector('#womensFilter');
    womensFilter.addEventListener('click', () => {
        let result = products.filter(p => p.category === "women's clothing");
        return RenderCards(result);
    });

    inputSearch.addEventListener('input', (event) => {
        let query = event.target.value;
        if (query !== '') {
            let result = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
            return RenderCards(result);
            
        }
    });

    RenderCards(products); 
});    

Cartcontent();


