const STORAGE_KEY = "cart"; // para no repetir la palabra cart , creo la variable

export function initiLocalStorage() {  //inicializo
    if (!localStorage.getItem(STORAGE_KEY)) { 
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

export function getFromLocalStorage(){ 
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) 
    
}


export function saveToLocalStorage(item){ // guardo los datos y como estan en tipo de dato objeto, los convierto a string
    if (!item || typeof item !== "object" || item.id === undefined) return; //por si trae un array en null
    let cart = getFromLocalStorage() || [];
    cart = cart.filter(p => p && p.id !== undefined);
    cart.push(item); // tengo que llamar al local storage y pushear el item, guarda el objeto en la Ultima posicion
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


export function setItemTolocalStorage(items){ // guardo los datos y como estan en tipo de dato objeto, los convierto a string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function updateItemLocalStorage(itemId, qtty) {    /// evitar re generar un item en el local storage al + / - qtty
    let dataStorage = getFromLocalStorage() || [];
    dataStorage = dataStorage.filter(p => p && p.id !== undefined);
    let idx = dataStorage.findIndex(p => p.id === itemId);

    if (idx !== -1) {
        if (!dataStorage[idx].qtty) dataStorage[idx].qtty = 0;
        dataStorage[idx].qtty += qtty;
        setItemTolocalStorage(dataStorage);
    }

    return idx;
}

