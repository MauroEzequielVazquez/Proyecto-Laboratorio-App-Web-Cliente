<<<<<<< HEAD
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
    let cart = getFromLocalStorage();
    cart.push(item); // tengo que llamar al local storage y pushear el item, guarda el objeto en la Ultima posicion
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


export function setItemTolocalStorage(items){ // guardo los datos y como estan en tipo de dato objeto, los convierto a string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
=======
const STORAGE_KEY = "cart"; // para no repetir la palabra cart , creo la variable 

//inicializo 
export function initiLocalStorage() { 
    if (!localStorage.getItem(STORAGE_KEY)) { 
        localStorage.setItem(STORAGE_KEY, JSON.stringify([])); 
    } 
} 

export function getFromLocalStorage(){ 
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) 
} 

export function saveToLocalStorage(item){ // guardo los datos y como estan en tipo de dato objeto, los convierto a string 
    let cart = getFromLocalStorage(); 
    cart.push(item); // tengo que llamar al local storage y pushear el item, guarda el objeto en la Ultima posicion 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); 
} 

export function setItemTolocalStorage(items){ // guardo los datos y como estan en tipo de dato objeto, los convierto a string 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); 
}
>>>>>>> 956ab6e495737521dd31f0e8e9272a262b46cdea
