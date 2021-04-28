//Crea un array di cognomi
var lista_cognomi = ["Bianchi", "Neri", "Rossi", "Gialli"];
//Chiedi all'utente il cognome
var cognome = prompt("Inserisci il tuo cognome");
//Pusha il cognome inserito nell'array di cognomi
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
lista_cognomi.push(cognome);
//Ordina alfabeticamente i cognomi, incluso l'ultimo aggiunto
lista_cognomi.sort();
//Stampa la lista ordinata alfabeticamente
console.log(lista_cognomi);
//scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var posizione = lista_cognomi.indexOf(cognome) + 1;
console.log(posizione + " " + cognome)
//HTML
document.getElementById("saluto").innerHTML = ("Bentrovato, sig/ra " + cognome + "!")
document.getElementById("here").innerHTML = ("Lei è in posizione " + posizione + " perché il suo cognome inizia per: " + cognome.charAt(0))