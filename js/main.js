/**
 * Un alert espone 5 numeri casuali diversi.
    Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
    Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
 */

// funzione random
function numberRandom(max, min){
    return Math.floor(Math.random()*(max - min + 1) )+min;
}

//ciclo e stampa dei numeri random
var numeriDaRicordare=[]
for(var i=0; i<5; i++){
  var N=numberRandom(1,100);
  numeriDaRicordare.push(N)  
    
}
alert(numeriDaRicordare)




