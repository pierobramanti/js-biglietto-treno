// CREO LA VARIABILE KM //
let km =prompt("Quanti km devi percorrere per arrivare a destinazione?")
console.log(km)

// CREO LA VARIABILE AGE//
let age=prompt("Quanti anni hai?")
console.log(age)

// CREO LA VARIABILE COST_KM E LE ASSEGNO IL VALORE (0.21)//
let cost_km = 0.21;
console.log(cost_km)

// CREO LA VARIABILE PRICE LE ASSEGNO IL VALORE CON MOLTIPLICAZIONE//
let price = cost_km * km;
console.log(price);

// CREO LA VARIABILE DISCOUNT E LE ASSEGNO IL VALORE 0//
let discount = 0;
console.log(discount)

// CREO LE CONDIZIONI DI SCONTO//

if (age < 18) {
    discount = 20 / 100;
}

else if (age >= 65) {
    discount = 40 / 100;
}

// INSERISCO LE ULTIME CONDIZIONI DI CALCOLO//
let price_discounted = price * discount;

let final_price = (price - price_discounted).toFixed(2);


document.getElementById("price").innerHTML = `Il prezzo del tuo biglietto è di: ${final_price} €.`