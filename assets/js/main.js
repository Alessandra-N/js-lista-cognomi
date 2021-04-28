/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili. */


//Crea un array di cognomi
var lista_cognomi = ["Bianchi", "Neri", "Rossi"];
//Chiedi all'utente il cognome
var cognome = prompt("Inserisci il tuo cognome");
//Pusha il cognome inserito nell'array di cognomi
lista_cognomi.push(cognome);
//Ordina alfabeticamente i cognomi, incluso l'ultimo aggiunto
lista_cognomi.sort;
//Stampa la lista ordinata alfabeticamente
console.log(lista_cognomi);
//scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log((lista_cognomi.indexOf(cognome)) + " " + cognome);

