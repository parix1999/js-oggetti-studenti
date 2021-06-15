/* PARTE 1:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte 
le proprietà dell’oggetto.
*/
var output1 = document.getElementById('result');
// Creo la variabile con gli oggetti (key e valore):
var studente = {
// key : valore,
    name : 'Edoardo',
    surname : 'Parisotto',
    age : '21',
    // Aggiunta della array per la parte 2 con all'interno gli studenti che andranno in stampa video:
    students : [
        nome = 'Gianni', 'Vercingitore', 'Lello',
        cognome = 'Ciano', 'Vessato', 'Lillo',
    ]
}

// Ora mi serve un for in per stampare i vari oggetti contenuti nella var stundente.
for (var key in studente) {
    console.log(key, studente[key]);
    output1.innerHTML += '<li>' +  key + ' ' +studente[key] + '</li>'
}

/* PARTE 2:
Creare un array di oggetti di studenti. 
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
Ricordatevi, è un array, quindi? for.
*/

// Ora si cicla su ogno studente all'interno della array:
for (var i = 0; i < studente.students.length; i++) {
    console.log(studente.students[i])
}