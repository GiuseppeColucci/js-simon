/**
 * Un alert espone 5 numeri casuali diversi.
    Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
    Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
 */
var numHtml=document.getElementById('num')
// funzione random
function numberRandom(max, min){
    return Math.floor(Math.random()*(max - min + 1) )+min;
}

//ciclo e stampa dei numeri random
var numeriDaRicordare;

for(var i=0; i<5; i++){
  var N=numberRandom(1,100);
  numeriDaRicordare.push(N);      
}

alert('Hai 30 sec per ricordare questi numeri!!!  '+ '' + numeriDaRicordare  +''+ '  oppure premi il pulsante OK! se ti senti pronto ;-)')
//tempo per far svanire l'alert!!


var NumUtente=[]
for(var y=0;y<5; y++){
    var utente=parseInt(prompt('inseirisci un numero'))
    NumUtente.push(utente)
  
}

var giusti=[];
var sbagliati=[];

for(var z=0; z<5; z++){

    if(numeriDaRicordare.includes(NumUtente)){
        giusti.push(NumUtente)
    }
    else{
        sbagliati.push(NumUtente)
    
    }
}

alert('i numeri giusti'+ giusti.length + ' e i numeri sbagliati sono '+ sbagliati.length)
