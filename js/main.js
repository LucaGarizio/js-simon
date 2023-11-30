// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creazione variabile da per stampare su schermo i numeri randomici
let numeri = document.querySelector(".box-numeri");

// creazione variabile da collegare all'input
// let userGuess = document.getElementById("userchoice");

// Ottenere il riferimento al bottone di inizio gioco
const startGame = document.getElementById("inizia-gioco");

// creare const per punteggio
const score = document.getElementById("score");

// creare variabile per chiedere i numeri all'utente
let askNumber;

// creare variabile con valore iniziale 0
let punteggio = 0;


 // Aggiungere un gestore di eventi al clic del bottone di inizio gioco
startGame.addEventListener("click", 
        function () {
        // stampa su schermo i numeri random creati
        numeri.innerHTML = ("I numeri da ricordare sono: " +creazioneNumeri);
        // cancella il contenuto dopo 30 secondi
        setTimeout(function () {
            nascondiNumeri();
            setTimeout (inserisciNumeri, 1000);
        }, 3000);
        
    }
);



let creazioneNumeri = createRandomNumbersForArray(1, 100);

// // creare funzione per array di numeri casuali da 1 a 100
function createRandomNumbersForArray(numMin, numMax) {

    // creare array vuoto
    let arrayNumber = [];
    
    // ciclo per creare 5 numeri casuali
    for(let i = 1; i <= 5; i++) {

        // creazione variabile da collegare a funzione creazione numero casuale
        let randomNumber = createRandomNumber(numMin, numMax);

        // controllare che non vengano pusshati 2 numeri uguali 
        if (!arrayNumber.includes(randomNumber)){
        // pusshare i numeri nell'array
        arrayNumber.push(randomNumber);
        }
        console.log(arrayNumber);
    }
    // caricare nell'array vuoto i 5 numeri casuali
    return arrayNumber;
}

// // creare funzione che mi restituisca un numero random
function createRandomNumber(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
}

// Funzione per nascondere i numeri
function nascondiNumeri() {
    numeri.innerHTML = "";
}

// creare funzione per chiedere all'utente i 5 numeri 
function inserisciNumeri (){
    for (let i = 0; i < 5; i++){
        askNumber = parseInt(prompt("inserisci i numeri che ti ricordi"));
        if (creazioneNumeri.includes(askNumber)) {
            alert("BrAvOoOoO!!1!!11!!")
            punteggio += 1;
            score.innerHTML = ("Punteggio: ") +punteggio;
            console.log(punteggio);
        } else {
            alert("Hai sbagliato")
            return
        }

        if (punteggio === 5) {
            score.innerHTML = "Sei un Bomber"
        }
    }  
}