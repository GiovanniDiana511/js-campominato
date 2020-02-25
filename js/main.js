/* SCOPO DEL GIOCO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50*/


var nomeUtente = prompt("Ciao! Come ti chiami?");   // Domanda di cortesia
var numeriCasuali = new Array;                      // Genero array che conterrà

// Genero i 16 numeri casuali tra 1 e 100.
for (var i = 1; i <= 16; i++) {
    var numero = numeriCasuali.push(generaRandom(1, 100));
}

// Uso un ciclo per permettere all'utente di inserire continuamente un dato fino a quando il numero inserito non sia presente nell'array iniziale
for (var i = 1; i <= 84; i++) {
    var numeroUtente = parseInt(prompt("Ciao " + nomeUtente + "! Inserisci un numero compreso tra 1 e 100"));
    console.log("Ok! Il numero che hai scelto è: " + numeroUtente);
    if (numeriCasuali.includes(numeroUtente)) {
        console.log("Mi dispiace, hai perso! Come vedi, il tuo numero è presente in questa lista: " + numeriCasuali);
        console.log("Il tuo punteggio è di: " + i);
        break
    } else {
        console.log("Wow " + nomeUtente + " sei proprio fortunato! Continua così! Hai ancora: " + (84 - i) + " tentativi per arrivare al traguardo!");
    }
}


function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
