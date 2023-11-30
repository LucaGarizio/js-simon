// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.






 // Ottenere il riferimento al bottone di inizio gioco
 const startGame = document.getElementById("inizia-gioco");

 // Aggiungere un gestore di eventi al clic del bottone di inizio gioco
startGame.addEventListener("click", 
        function () {
        alert("I numeri da ricordare sono: " +creazioneNumeri)
});


 let creazioneNumeri = createRandomNumbersForArray(1, 100);


// // creare funzione per array di numeri casuali da 1 a 100
function createRandomNumbersForArray(numMin, numMax) {

    // creare array vuoto
    let arrayNumber = [];

    // ciclo per creare 5 numeri casuali
    for(let i = 0; i <= 5; i++) {

        // creazione variabile da collegare a funzione creazione numero casuale
        let randomNumber = createRandomNumber(numMin, numMax);

        // controllare che non vengano pusshati 2 numeri uguali 
        if (!arrayNumber.includes(randomNumber)){
        // pusshare i numeri nell'array
        arrayNumber.push(randomNumber);
        }
    }
    // caricare nell'array vuoto i 5 numeri casuali
    return arrayNumber;
}


// // creare funzione che mi restituisca un numero random
function createRandomNumber(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
}

// funzione per timeout
function nascondiNumeri(){

}
